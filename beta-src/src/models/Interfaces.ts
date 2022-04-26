import BoardClass from "./BoardClass";
import UnitClass from "./UnitClass";

export interface IBoard {
  context: IContext;
  territories: ITerritory[];
  terrStatus: ITerrStatus[];
  units: IUnit[];
}

export interface ITerritory {
  coast: string;
  countryID: string;
  coastParentID: string;
  id: string;
  name: string;
  supply: string;
  type: string;
  Borders: IBorder[];
  CoastalBorders: ICoastalBorder[];
}

export interface IBorder {
  id: string;
  a: boolean;
  f: boolean;
}

export interface ICoastalBorder {
  id: string;
  a: boolean;
  f: boolean;
}

export interface IUnit {
  id: string;
  countryID: string;
  type: string;
  terrID: string;
}

export interface ITerrStatus {
  id: string;
  occupiedFromTerrID: string | null;
  ownerCountryID: string | null;
  standoff: boolean;
  unitID: string | null;
}

export interface IContext {
  countryID: string;
  gameID: number;
  memberID: number;
  maxOrderID: string;
  orderStatus: string;
  phase: string;
  tokenExpireTime: number;
  turn: number;
  userID: number;
  variantID: number;
}

export interface IConvoyGroup {
  armies: IUnit[];
  coasts: ITerritory[];
  fleets: IUnit[];
}

export interface IOrder {
  board: BoardClass;
  orderData: IOrderData;
  unit: UnitClass;
}

export interface IOrderData {
  convoyPath?: string[];
  error: string | null;
  fixed?: string[];
  fromTerrID: string | null;
  id: string;
  saved?: boolean;
  status: string;
  toTerrID: string | null;
  type: string;
  unitID: string;
  viaConvoy: string | null;
}
