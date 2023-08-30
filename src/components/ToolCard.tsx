import { Tool } from "@types";
import { Card, CardTitle } from "./ui/card";
import { useToolsContext } from "@context/tools";
import Image from "next/image";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { handleModalTrigger } = useToolsContext();
  const { name, icon, color } = tool;
  return (
    <Card
      onClick={() => handleModalTrigger(tool)}
      className="flex flex-col items-center w-56 py-5 gap-5 cursor-pointer hover:border-sky-500 hover:-translate-y-2 transition"
      style={{ backgroundColor: color }}
    >
      <Image
        priority
        width={176}
        height={176}
        className="w-44 h-44"
        src={icon}
        alt={name}
      />
      <CardTitle className="text-center">{name}</CardTitle>
    </Card>
  );
}
