import BoardClass from "../../models/BoardClass";
import GameCommands, { BuildCommand, DrawArrowCommand } from "./GameCommands";
import GameDataResponse from "./GameDataResponse";
import GameErrorResponse from "./GameErrorResponse";
import GameOverviewResponse from "./GameOverviewResponse";
import GameStateMaps from "./GameStateMaps";
import GameStatusResponse from "./GameStatusResponse";
import GameMessages from "./GameMessages";
import OrderState from "./OrderState";
import OrdersMeta from "./SavedOrders";
import TerritoriesMeta from "./TerritoriesState";
import UserActivity from "./UserActivity";
import { Unit } from "../../utils/map/getUnits";
import UIState from "../../enums/UIState";

export type ApiStatus = "idle" | "loading" | "succeeded" | "failed";

// FIXME: nasty to have dependencies to component state in here
type UnitState = { [key: string]: UIState };

export interface GameState {
  activity: UserActivity;
  apiStatus: ApiStatus;
  board: BoardClass | undefined;
  data: GameDataResponse;
  error: GameErrorResponse;
  maps: GameStateMaps;
  overview: GameOverviewResponse;
  ordersMeta: OrdersMeta;
  ownUnits: string[];
  units: Unit[];
  territoriesMeta: TerritoriesMeta;
  commands: GameCommands;
  status: GameStatusResponse;
  messages: GameMessages;

  order: OrderState;
  unitState: UnitState; // map from unit ID to icon state
  buildPopover: BuildCommand[]; // list of possible builds that the user can choose from
  arrows: DrawArrowCommand[];
}
