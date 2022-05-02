import BoardClass from "../../models/BoardClass";
import OrderClass from "../../models/OrderClass";
import TerritoryClass from "../../models/TerritoryClass";
import UnitClass from "../../models/UnitClass";
import { EditOrderMeta } from "../../state/interfaces/SavedOrders";

interface Props {
  [key: string]: EditOrderMeta;
}

export default function getOrdersMeta(data, phase): Props {
  const { contextVars, currentOrders, territories, territoryStatuses, units } =
    data;

  const updateOrdersMeta = {};
  if (contextVars?.context) {
    if (phase === "Builds") {
      currentOrders.forEach(({ id, toTerrID, type }) => {
        updateOrdersMeta[id] = {
          saved: true,
          update: {
            type: toTerrID ? type : "Wait",
            toTerrID,
          },
        };
      });
    } else {
      const newBoard = new BoardClass(
        contextVars.context,
        Object.values(territories),
        territoryStatuses,
        Object.values(units),
      );

      const newOrders: OrderClass[] = [];

      currentOrders.forEach((o) => {
        const { id, unitID, type, toTerrID } = o;
        let orderUnit = newBoard.findUnitByID(unitID);

        if (!orderUnit?.Territory && phase === "Retreats") {
          orderUnit = new UnitClass({
            ...units[unitID],
            Territory: territories[units[unitID].terrID],
          });
        }

        if (orderUnit) {
          const tempOrder = new OrderClass(newBoard, o, orderUnit);
          newOrders.push(tempOrder);
          updateOrdersMeta[id] = {
            update: {
              type,
              toTerrID,
            },
          };
          if (!newBoard.findUnitByID(unitID)) {
            newBoard.units.push(orderUnit);
          }
        }
      });

      newOrders.forEach((o) => {
        const moveChoices = o.getMoveChoices();
        const orderUnit = newBoard.findUnitByID(o.unit.id);
        let allowedBorderCrossings: TerritoryClass[] = [];
        if (orderUnit) {
          allowedBorderCrossings = moveChoices.filter((choice) => {
            const { Borders } = choice;
            const from = Borders.find(
              (border) => border.id === orderUnit.terrID,
            );
            if (from && orderUnit.canCrossBorder(from)) {
              return true;
            }
            return false;
          });
          if (phase === "Retreats") {
            const occupiedTerritory = newBoard.territories.find(
              (t) => t.id === orderUnit.terrID,
            );
            allowedBorderCrossings = allowedBorderCrossings.filter(
              (crossing) => !crossing.unitID && !crossing.standoff,
            );
            if (occupiedTerritory) {
              allowedBorderCrossings = allowedBorderCrossings.filter(
                (crossing) =>
                  crossing.id !== occupiedTerritory.occupiedFromTerrID,
              );
            }
          }
          updateOrdersMeta[o.orderData.id] = {
            ...{ saved: true },
            ...updateOrdersMeta[o.orderData.id],
            ...{ allowedBorderCrossings },
          };
        }
      });
    }
  }
  return updateOrdersMeta;
}
