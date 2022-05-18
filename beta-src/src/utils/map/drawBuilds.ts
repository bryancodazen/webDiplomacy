import { current } from "@reduxjs/toolkit";
import BuildUnitMap, { BuildUnitTypeMap } from "../../data/BuildUnit";
import countryMap from "../../data/map/variants/classic/CountryMap";
import TerritoryMap from "../../data/map/variants/classic/TerritoryMap";
import Territory from "../../enums/map/variants/classic/Territory";
import UIState from "../../enums/UIState";
import { GameCommand } from "../../state/interfaces/GameCommands";
import GameOverviewResponse from "../../state/interfaces/GameOverviewResponse";
import { GameState } from "../../state/interfaces/GameState";
import OrderState from "../../state/interfaces/OrderState";
import OrdersMeta from "../../state/interfaces/SavedOrders";
import TerritoriesMeta from "../../state/interfaces/TerritoriesState";
import setCommand from "../state/setCommand";

/* eslint-disable no-param-reassign */
export default function drawBuilds(state): void {
  const {
    ordersMeta,
    territoriesMeta,
    overview: { members, phase },
    maps,
    ownUnits,
  }: {
    order: OrderState;
    ordersMeta: OrdersMeta;
    territoriesMeta: TerritoriesMeta;
    overview: {
      members: GameOverviewResponse["members"];
      phase: GameOverviewResponse["phase"];
    };
    maps: GameState["maps"];
    ownUnits;
  } = current(state);

  if (phase === "Builds") {
    ownUnits.forEach((unitID) => {
      state.unitState[unitID] = UIState.NONE;
    });
    Object.values(ordersMeta).forEach(({ update }) => {
      if (update) {
        const { toTerrID, type } = update;
        if (toTerrID) {
          const territoryMeta = territoriesMeta[maps.territoryToEnum[toTerrID]];
          if (territoryMeta) {
            // Destroy Units
            if (type === "Destroy" && toTerrID) {
              const unitID = maps.territoryToUnit[toTerrID];
              state.unitState[unitID] = UIState.DESTROY;
            } else {
              const buildType = BuildUnitMap[type];
              const mappedTerritory = TerritoryMap[territoryMeta.name];
              const memberCountry = members.find(
                (member) =>
                  member.countryID.toString() === territoryMeta.countryID,
              );
              if (memberCountry) {
                let command: GameCommand = {
                  command: "SET_UNIT",
                  data: {
                    setUnit: {
                      componentType: "Icon",
                      country: countryMap[memberCountry?.country],
                      iconState: UIState.BUILD,
                      unitSlotName: mappedTerritory.unitSlotName,
                      unitType: BuildUnitTypeMap[buildType],
                    },
                  },
                };
                const commandTerritoryDestination =
                  territoryMeta.territory ===
                    Territory.SAINT_PETERSBURG_NORTH_COAST ||
                  territoryMeta.territory ===
                    Territory.SAINT_PETERSBURG_SOUTH_COAST
                    ? Territory[Territory.SAINT_PETERSBURG]
                    : Territory[territoryMeta.territory];
                setCommand(
                  state,
                  command,
                  "territoryCommands",
                  commandTerritoryDestination,
                );
                command = {
                  command: "MOVE",
                };
                setCommand(
                  state,
                  command,
                  "territoryCommands",
                  commandTerritoryDestination,
                );
              }
            }
          }
        }
      }
    });
  }
}
