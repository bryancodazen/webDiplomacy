import { current } from "@reduxjs/toolkit";
import { GameCommand } from "../../../../state/interfaces/GameCommands";
import GameDataResponse from "../../../../state/interfaces/GameDataResponse";
import GameOverviewResponse from "../../../../state/interfaces/GameOverviewResponse";
import { GameState } from "../../../../state/interfaces/GameState";
import GameStateMaps from "../../../../state/interfaces/GameStateMaps";
import OrderState from "../../../../state/interfaces/OrderState";
import OrdersMeta from "../../../../state/interfaces/SavedOrders";
import highlightMapTerritoriesBasedOnStatuses from "../../../map/highlightMapTerritoriesBasedOnStatuses";
import getAvailableOrder from "../../getAvailableOrder";
import resetOrder from "../../resetOrder";
import setCommand from "../../setCommand";
import startNewOrder from "../../startNewOrder";
import updateOrdersMeta from "../../updateOrdersMeta";

/* eslint-disable no-param-reassign */
export default function processUnitClick(state, clickData) {
  const {
    data,
    maps,
    order,
    ordersMeta,
    ownUnits,
    overview,
    mustDestroyUnitsBuildPhase,
  }: {
    data: GameDataResponse;
    maps: GameStateMaps;
    order: OrderState;
    ordersMeta: OrdersMeta;
    ownUnits: string[];
    overview: GameOverviewResponse;
    mustDestroyUnitsBuildPhase: GameState["mustDestroyUnitsBuildPhase"];
  } = current(state);
  const { lastUnitClick } = current(state);
  const {
    data: { currentOrders, units },
  } = data;
  const {
    inProgress: orderInProgress,
    method,
    onTerritory,
    orderID,
    type,
    unitID,
  } = order;
  const {
    phase,
    user: {
      member: { orderStatus },
    },
  } = overview;
  if (orderStatus.Ready) {
    return;
  }
  const unitType = units[clickData.payload.unitID].type;

  if (unitType === "Fleet" && ownUnits.includes(clickData.payload.unitID)) {
    const command: GameCommand = {
      command: "DISABLE_TERRITORY_CLICK",
    };

    setCommand(state, command, "territoryCommands", "BULGARIA");
    setCommand(state, command, "territoryCommands", "SPAIN");
    setCommand(state, command, "territoryCommands", "SAINT_PETERSBURG");
  }

  const now = Date.now();
  let inProgress = orderInProgress;
  state.lastUnitClick = now;
  const dblClickThreshold = 200;
  if (
    lastUnitClick &&
    order.method !== "dblClick" &&
    now < lastUnitClick + dblClickThreshold
  ) {
    clickData.payload.method = "dblClick";
    inProgress = false;
  }
  if (phase === "Retreats") {
    const unitsOrderMeta =
      ordersMeta[maps.unitToOrder[clickData.payload.unitID]];

    if (
      !unitsOrderMeta ||
      (unitsOrderMeta &&
        unitsOrderMeta.update?.type === "Disband" &&
        !unitsOrderMeta.allowedBorderCrossings?.length)
    ) {
      return;
    }
  }
  if (phase === "Builds") {
    // Destroy Units
    if (
      !ownUnits.includes(clickData.payload.unitID) ||
      !mustDestroyUnitsBuildPhase
    ) {
      return;
    }

    const existingOrder = Object.entries(ordersMeta).find(([, { update }]) => {
      return (
        update?.toTerrID === maps.unitToTerritory[clickData.payload.unitID]
      );
    });

    if (existingOrder) {
      const [eOrderID, eOrder] = existingOrder;
      if (eOrderID && eOrder) {
        updateOrdersMeta(state, {
          [eOrderID]: {
            saved: false,
            update: {
              type: "Destroy",
              toTerrID: null,
            },
          },
        });
      }
    } else {
      const availableOrder = getAvailableOrder(currentOrders, ordersMeta);
      if (availableOrder) {
        updateOrdersMeta(state, {
          [availableOrder]: {
            saved: false,
            update: {
              type: "Destroy",
              toTerrID: maps.unitToTerritory[clickData.payload.unitID],
            },
          },
        });
      }
    }
  } else if (inProgress) {
    if (unitID === clickData.payload.unitID) {
      resetOrder(state);
      highlightMapTerritoriesBasedOnStatuses(state);
      if (type === "disband" || type === "retreat") {
        highlightMapTerritoriesBasedOnStatuses(state);
      }
    } else if ((type === "hold" || type === "move") && onTerritory !== null) {
      highlightMapTerritoriesBasedOnStatuses(state);
    } else if (method === "dblClick" && unitID !== clickData.payload.unitID) {
      state.order.subsequentClicks.push({
        ...{
          inProgress: true,
          order: orderID,
          toTerritory: null,
        },
        ...clickData.payload,
      });
    } else if (ownUnits.includes(clickData.payload.unitID)) {
      const currentOrderUnitType = units[unitID].type;
      const newClickUnitType = units[clickData.payload.unitID].type;
      if (currentOrderUnitType === "Army" && newClickUnitType === "Fleet") {
        // this is a convoy move
        state.order.type = "convoy";
        state.order.subsequentClicks.push({
          ...{
            inProgress: true,
            order: orderID,
            toTerritory: null,
          },
          ...clickData.payload,
        });
        highlightMapTerritoriesBasedOnStatuses(state);
      } else {
        startNewOrder(state, clickData);
      }
    } else if (!ownUnits.includes(clickData.payload.unitID)) {
      // Convoy Ally
      const currentOrderUnitType = units[unitID].type;
      const newClickUnitType = units[clickData.payload.unitID].type;
      if (currentOrderUnitType === "Fleet" && newClickUnitType === "Army") {
        state.order.type = "convoy";
        state.order.subsequentClicks.push({
          ...{
            inProgress: true,
            order: orderID,
            toTerritory: null,
          },
          ...clickData.payload,
        });
        highlightMapTerritoriesBasedOnStatuses(state);
      }
    }
  } else if (ownUnits.includes(clickData.payload.unitID)) {
    startNewOrder(state, clickData);
  }
}
