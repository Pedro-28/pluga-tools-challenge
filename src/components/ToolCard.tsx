import { Card, CardTitle } from "./ui/card";

export default function ToolCard() {
  return (
    <Card className="flex flex-col items-center w-56 py-5 gap-4">
      <img
        className="w-44 h-44 rounded-full"
        src='https://github.com/Pedro-28.png'
      />
      <CardTitle>Tool name</CardTitle>
    </Card>
  );
}
