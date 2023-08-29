import { Tool } from "@types";
import { Card, CardTitle } from "./ui/card";
import { useToolsContext } from "@context/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { handleModalTrigger } = useToolsContext();
  const { name, icon, color } = tool;
  return (
    <Card
      onClick={() => handleModalTrigger(tool)}
      className='flex flex-col items-center w-56 py-5 gap-5 cursor-pointer hover:scale-105'
      style={{ backgroundColor: color }}
    >
      <img
        className="w-44 h-44"
        src={icon}
      />
      <CardTitle className="text-center">{name}</CardTitle>
    </Card>
  );
}
