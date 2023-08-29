import { useToolsContext } from "@context/tools";
import { Input } from "./ui/input";

export default function Header() {
  const { handleToolSearch } = useToolsContext();
  return (
    <header className="p-4">
      <Input
        onChange={({ target }) => handleToolSearch(target.value)}
      />
    </header>
  );
}
