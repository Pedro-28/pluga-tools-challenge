import { useToolsContext } from "@context/tools";
import { Input } from "./ui/input";

export default function Header() {
  const { setSearchedValue } = useToolsContext();
  return (
    <header className="p-4">
      <Input
        onChange={({ target }) => setSearchedValue(target.value)}
      />
    </header>
  );
}
