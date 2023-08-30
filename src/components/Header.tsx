import { Search } from "lucide-react";

import { useToolsContext } from "@context/tools";
import Image from "next/image";

export default function Header() {
  const { handleToolSearch } = useToolsContext();
  return (
    <header className="w-full flex items-center gap-3 px-4 py-6">
      <Image
        src="/plugaLogo.png"
        alt="Logo da Pluga"
        width={100}
        height={100}
        className="w-auto h-auto"
      />

      <div className="relative w-full h-14">
        <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-zinc-400" />

        <input
          type="text"
          placeholder="Buscar ferramentas"
          className="h-14 w-full rounded-md border pl-10 pr-3 py-2 text-base font-medium text-zinc-500 placeholder:text-zinc-400 hover:border-sky-500 focus:outline-sky-500"
          onChange={({ target }) => handleToolSearch(target.value)}
        />
      </div>
    </header>
  );
}
