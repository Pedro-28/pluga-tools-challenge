import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { useToolsContext } from "@context/tools";
import ToolCard from "./ToolCard";
import { Tool } from "@types";

export default function ToolModal() {
  const { selectedTool, isModalOpen, setIsModalOpen } = useToolsContext();
  const { name, icon, link } = selectedTool;

  let visualizedTools: Tool[] = [];
  const storedTools = localStorage.getItem('visualizedTools');

  if (!!storedTools) {
    visualizedTools = JSON.parse(storedTools);
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
      <DialogContent className="w-56 bg-slate-300">
        <DialogHeader className="flex flex-row items-center justify-evenly">
          <img
            className="w-44 h-44"
            src={icon}
          />
          <div className="flex flex-col">
            <DialogTitle>{name}</DialogTitle>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Acessar
            </a>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-start">
          <h2>Últimas ferramentas visualizadas</h2>
          <div className="flex ">
            {visualizedTools.map((tool) => (
              <ToolCard
                key={tool.app_id}
                tool={tool}
              />
            ))
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>

  );
}
