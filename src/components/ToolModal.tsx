import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

import { useToolsContext } from "@context/tools";
import ToolCard from "./ToolCard";
import { Tool } from "@types";
import Image from "next/image";

export default function ToolModal() {
  const { selectedTool, isModalOpen, setIsModalOpen } = useToolsContext();
  const { name, icon, link, color } = selectedTool;

  let visualizedTools: Tool[] = [];
  let storedTools = null;

  if (typeof window !== "undefined") {
    storedTools = localStorage.getItem("visualizedTools");
  }

  if (!!storedTools) {
    visualizedTools = JSON.parse(storedTools);
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        className="p-10 max-w-2xl max-h-[37.5rem] bg-slate-50 overflow-x-auto"
        data-testid="tool_modal"
      >
        <DialogHeader className="flex items-center justify-evenly gap-4 sm:flex-row sm:gap-0">
          <div className="p-2 rounded-md" style={{ backgroundColor: color }}>
            <Image
              priority
              width={160}
              height={160}
              className="w-40 h-40"
              src={icon}
              alt={name}
            />
          </div>
          <div className="flex flex-col items-center gap-5 sm:items-start">
            <DialogTitle className="text-5xl" style={{ color }}>
              {name}
            </DialogTitle>
            <a
              className="text-xl font-semibold py-2 px-6 text-zinc-500 border rounded-3xl border-zinc-400 hover:text-zinc-50 hover:border-sky-500 hover:bg-sky-500 transition-colors focus:outline-sky-500"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar
            </a>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-start pt-6 gap-5 overflow-hidden">
          <h2 className="text-2xl font-semibold text-zinc-500">
            Últimas ferramentas visualizadas
          </h2>
          <div className="w-full flex flex-col items-center sm:flex-row gap-4">
            {visualizedTools.map((tool) => (
              <ToolCard
                key={tool.app_id}
                tool={tool}
                cardClassName="w-44 gap-4 flex-shrink-0"
                imgClassName="w-36 h-36"
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
