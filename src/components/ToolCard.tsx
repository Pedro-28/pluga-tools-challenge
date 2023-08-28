import { Card, CardTitle } from "./ui/card";

interface ToolCardProps {
  name: string;
  iconUrl: string;
  bgColor: string;
}

export default function ToolCard({ name, iconUrl, bgColor }: ToolCardProps) {
  return (
    <Card
      className='flex flex-col items-center w-56 py-5 gap-5 cursor-pointer hover:scale-105'
      style={{ backgroundColor: bgColor }}
    >
      <img
        className="w-44 h-44"
        src={iconUrl}
      />
      <CardTitle className="text-center">{name}</CardTitle>
    </Card>
  );
}
