import GameDataResponse from "../../state/interfaces/GameDataResponse";
import GameOverviewResponse from "../../state/interfaces/GameOverviewResponse";
import TerritoryMap, {
  MTerritory,
} from "../../data/map/variants/classic/TerritoryMap";
import countryMap from "../../data/map/variants/classic/CountryMap";
import Country from "../../enums/Country";
import { IUnit } from "../../models/Interfaces";

interface Unit {
  country: Country;
  mappedTerritory: MTerritory;
  unit: IUnit;
}

export default function getUnits(
  data: GameDataResponse["data"],
  members: GameOverviewResponse["members"],
): Unit[] {
  const unitsToDraw: Unit[] = [];
  const { contextVars, territories, territoryStatuses, units } = data;
  Object.values(units).forEach((unit) => {
    let territory = territories[unit.terrID];

    const territoryStatus = territoryStatuses.find((t) => unit.terrID === t.id);
    if (
      territoryStatus?.occupiedFromTerrID &&
      unit.countryID !== territoryStatus.ownerCountryID &&
      contextVars?.context.phase === "Retreats"
    ) {
      territory = territories[territoryStatus.occupiedFromTerrID];
    }

    if (territory) {
      const mappedTerritory = TerritoryMap[territory.name];
      if (mappedTerritory) {
        const memberCountry = members.find(
          (member) => member.countryID.toString() === unit.countryID,
        );
        if (memberCountry) {
          const { country } = memberCountry;
          unitsToDraw.push({
            country: countryMap[country],
            mappedTerritory,
            unit,
          });
        }
      }
    }
  });
  return unitsToDraw;
}
