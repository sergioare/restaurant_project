import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { AppEvent, EventState, EventStore } from "./events.model";

const initialState: EventState = {
  events: [],
};

const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      ...initialState,

      addEvent: (type, payload) => {
        const newEvent: AppEvent = {
          eventId: uuidv4(),
          source: "web",
          type,
          payload,
          timestamp: new Date().toISOString(),
        };
        set((state) => ({ events: [...state.events, newEvent] }));
      },

      clearEvents: () => set({ events: [] }),
    }),
    {
      name: "events-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useEventStore;
