import { current } from "@reduxjs/toolkit";
import { EditOrderMeta } from "../../state/interfaces/SavedOrders";
import drawOrders from "../map/drawOrders";
import writeNotifications from "../ui/writeNotifications";

/* eslint-disable no-param-reassign */
export default function updateOrdersMeta(state, updates: EditOrderMeta): void {
  if (state.transition) {
    state.ordersMeta = {};
  }

  Object.entries(updates).forEach(([orderID, update]) => {
    state.ordersMeta[orderID] = {
      ...state.ordersMeta[orderID],
      ...update,
    };
  });
  writeNotifications(state);
  drawOrders(state);
}
