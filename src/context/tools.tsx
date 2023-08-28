'use client'

import { Tool } from "@types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ToolsContextProps {
  tools: Tool[];
  searchedValue: string;
  setSearchedValue(value: string): void
}

const toolsContext = createContext({} as ToolsContextProps);

interface ToolsProviderProps {
  tools: Tool[];
  children: ReactNode;
}

export function ToolsProvider(props: ToolsProviderProps) {
  const [tools] = useState(props.tools);
  const [searchedValue, setSearchedValue] = useState('');

  return (
    <toolsContext.Provider
      value={{
        tools,
        searchedValue,
        setSearchedValue
      }}
    >
      {props.children}
    </toolsContext.Provider>
  );
}

export const useToolsContext = () => useContext(toolsContext);
