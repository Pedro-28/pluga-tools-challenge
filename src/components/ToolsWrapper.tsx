import { useToolsContext } from "@context/tools";
import ToolCard from "./ToolCard";
import ToolModal from "./ToolModal";

export default function ToolsWrapper() {
  const { filteredTools, searchedName } = useToolsContext();

  return (
    <section className="flex justify-center flex-wrap p-4 gap-6">
      {filteredTools.length ? (
        filteredTools.map((tool) => <ToolCard key={tool.app_id} tool={tool} />)
      ) : (
        <p className="w-11/12 text-zinc-600 text-base font-semibold text-center py-4">
          Ops! Não encontramos nenhuma ferramenta com o nome &quot;
          {searchedName}&quot; fornecido. Que tal tentar um termo diferente?
        </p>
      )}
      <ToolModal />
    </section>
  );
}
