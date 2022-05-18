import { MTerritory } from "../../data/map/variants/classic/TerritoryMap";
import BuildUnit from "../../enums/BuildUnit";
import Country from "../../enums/Country";
import Territory from "../../enums/map/variants/classic/Territory";
import UIState from "../../enums/UIState";
import { IUnit } from "../../models/Interfaces";
import UnitSlotName from "../../types/map/UnitSlotName";
import UnitType from "../../types/UnitType";
import GetArrayElementType from "../../utils/getArrayElementType";

export const ValidCommands = [
  "BUILD",
  "CAPTURED",
  "DESTROY",
  "DISBAND",
  "DISLODGED",
  "DRAW_ARROW",
  "HOLD",
  "INVALID_CLICK",
  "MOVE",
  "NONE",
  "REMOVE_ARROW",
  "REMOVE_BUILD",
  "RETREAT",
  "SELECTED",
  "SET_UNIT",
] as const;

export interface DrawArrowCommand {
  from: Territory;
  to: Territory;
  type: "move";
}

interface ClickCommand {
  evt: unknown;
  territoryName: string;
}

// FIXME: Rename when we get rid of commands
export interface BuildCommand {
  availableOrder: string;
  canBuild: BuildUnit;
  toTerrID: string;
  unitSlotName: UnitSlotName;
}

interface RemoveBuild {
  orderID: string;
}

interface SetUnitCommand {
  componentType?: "Game" | "Icon";
  country?: Country;
  iconState?: UIState;
  mappedTerritory?: MTerritory;
  unit?: IUnit;
  unitType?: UnitType;
  unitSlotName: UnitSlotName;
}

export type Command = GetArrayElementType<typeof ValidCommands>;

export interface GameCommand {
  command: Command;
  data?: {
    arrow?: DrawArrowCommand;
    build?: {
      territoryName: keyof Territory;
      builds: BuildCommand[];
    };
    click?: ClickCommand;
    country?: keyof Country | "none";
    orderID?: string;
    removeBuild?: RemoveBuild;
    setUnit?: SetUnitCommand;
  };
}

export interface GameCommandContainer {
  [key: string]: Map<string, GameCommand>;
}

export type GameCommandType = "territoryCommands";

type GameCommands = {
  [key in GameCommandType]: GameCommandContainer;
};

export default GameCommands;
