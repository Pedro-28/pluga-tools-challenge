import Image from "next/image";
import { cn } from "@/lib/utils";

import { useToolsContext } from "@context/tools";
import { Card, CardTitle } from "./ui/card";
import { Tool } from "@types";

interface ToolCardProps {
  tool: Tool;
  cardClassName?: string;
  imgClassName?: string;
}

export default function ToolCard({
  tool,
  cardClassName,
  imgClassName,
}: ToolCardProps) {
  const { handleModalTrigger } = useToolsContext();
  const { name, icon, color } = tool;
  return (
    <Card
      onClick={() => handleModalTrigger(tool)}
      tabIndex={0}
      className={cn(
        "flex flex-col items-center w-56 py-5 gap-5 cursor-pointer hover:border-sky-500 hover:-translate-y-2 transition focus:outline-sky-500",
        cardClassName
      )}
      style={{ backgroundColor: color }}
      data-testid="tool_card"
    >
      <Image
        priority
        width={176}
        height={176}
        className={cn("w-44 h-44", imgClassName)}
        src={icon}
        alt={name}
      />
      <CardTitle className="w-full text-center overflow-hidden text-ellipsis">
        {name}
      </CardTitle>
    </Card>
  );
}
