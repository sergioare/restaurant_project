"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import userService from "@/services/modules/user";
import { ThemeProvider } from "@/utils/ThemeProvider";

import { ContextProps } from "./context.model";

type Props = {
  children: React.ReactNode;
};

const defaultValues: ContextProps = {
  user: null,
};

const AppContext = createContext<ContextProps>(defaultValues);

export function ContextProvider({ children }: Props) {
  const [appState, setAppState] = useState<ContextProps>(defaultValues);

  const updateUser = (user: ContextProps["user"]) => {
    setAppState((prevState) => ({ ...prevState, user }));
  };

  useEffect(() => {
    const setUser = async () => {
      try {
        const userResponse = await userService.getUser();
        const user = userResponse.data;

        setAppState((prevState) => ({
          ...prevState,
          user,
        }));
      } catch (error) {
        console.error("Context error in setUser:", error);
      }
    };

    void setUser();
  }, []);

  const contextValue = useMemo(() => ({ ...appState, updateUser }), [appState]);

  if (!appState.user) return null;

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
