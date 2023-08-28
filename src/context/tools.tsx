'use client'

import { Tool } from "@types";
import { ReactNode, createContext, useContext, useState } from "react";

interface ToolsContextProps {
  tools: Tool[];
}

const toolsContext = createContext({} as ToolsContextProps);

interface ToolsProviderProps {
  tools: Tool[];
  children: ReactNode;
}

export function ToolsProvider(props: ToolsProviderProps) {
  const [tools, setTools] = useState(props.tools);

  return (
    <toolsContext.Provider
      value={{
        tools,
      }}
    >
      {props.children}
    </toolsContext.Provider>
  );
}

export const useToolsContext = () => useContext(toolsContext);
