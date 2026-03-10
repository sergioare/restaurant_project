type EventType =
  | "CART_ITEM_ADDED"
  | "CART_ITEM_UPDATED"
  | "CART_ITEM_REMOVED"
  | "STOCK_LIMIT_REACHED"
  | "ORDER_PLACED";

type AppEvent = {
  eventId: string;
  type: EventType;
  payload: Record<string, unknown>;
  source: "web" | "api" | "worker";
  timestamp: string;
};

type EventState = {
  events: AppEvent[];
};

type EventActions = {
  addEvent: (event: EventType, payload: Record<string, unknown>) => void;
  clearEvents: () => void;
};

type EventStore = EventState & EventActions;

export type { EventType, AppEvent, EventStore, EventState };
