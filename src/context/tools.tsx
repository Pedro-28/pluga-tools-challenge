'use client'

import { Tool } from "@types";
import { ReactNode, createContext, useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface ToolsContextProps {
  filteredTools: Tool[];
  searchedName: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  totalTools: number;
  selectedTool: Tool;
  isModalOpen: boolean;
  setIsModalOpen(isOpen: boolean): void;
  handleToolSearch(searchedValue: string): void;
  handleModalTrigger(tool: Tool): void;
}

const toolsContext = createContext({} as ToolsContextProps);

interface ToolsProviderProps {
  tools: Tool[];
  children: ReactNode;
}

export function ToolsProvider(props: ToolsProviderProps) {
  const [searchedName, setSearchedName] = useState('');
  const [tools] = useState(props.tools);
  const [selectedTool, setSelectedTool] = useState({} as Tool);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  let filteredTools = tools.filter(({ name }) => (
    name.toLowerCase().includes(searchedName.toLowerCase())
  ));

  const totalTools = filteredTools.length;

  const toolsPerPage = searchParams.get('per_page') ?? '12';
  const page = searchParams.get('page') ?? '1';

  const start = (Number(page) - 1) * Number(toolsPerPage);
  const end = start + Number(toolsPerPage);

  const hasPrevPage = start > 0;
  const hasNextPage = end < filteredTools.length;

  filteredTools = filteredTools.slice(start, end);

  const handleToolSearch = (searchedValue: string) => {
    if (page !== '1') router.replace('/');

    setSearchedName(searchedValue);
  }

  const handleModalTrigger = (tool: Tool) => {
    const storedTools = localStorage.getItem('visualizedTools');

    if (!!storedTools) {
      const visualizedTools: Tool[] = JSON.parse(storedTools);
      const existingIndex = visualizedTools.findIndex(({ app_id }) => app_id === tool.app_id);

      if (existingIndex !== -1) {
        visualizedTools.splice(existingIndex, 1);
      }

      visualizedTools.unshift(tool);

      if (visualizedTools.length > 3) {
        visualizedTools.pop();
      }

      localStorage.setItem('visualizedTools', JSON.stringify(visualizedTools));
    } else {
      localStorage.setItem('visualizedTools', JSON.stringify([tool]));
    }

    setSelectedTool(tool);
    setIsModalOpen(true);
  }

  return (
    <toolsContext.Provider
      value={{
        filteredTools,
        searchedName,
        hasPrevPage,
        hasNextPage,
        totalTools,
        selectedTool,
        isModalOpen,
        setIsModalOpen,
        handleToolSearch,
        handleModalTrigger
      }}
    >
      {props.children}
    </toolsContext.Provider>
  );
}

export const useToolsContext = () => useContext(toolsContext);
