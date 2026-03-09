import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export const useHasHydrated = () => {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
};
