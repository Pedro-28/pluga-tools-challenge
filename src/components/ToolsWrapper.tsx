import { useToolsContext } from "@context/tools";
import ToolCard from "./ToolCard";
import ToolModal from "./ToolModal";

export default function ToolsWrapper() {
  const { filteredTools, searchedName } = useToolsContext();

  return (
    <section className="p-4 flex justify-center flex-wrap gap-5">
      {
        filteredTools.length ?
          filteredTools.map((tool) => (
            <ToolCard
              key={tool.app_id}
              tool={tool}
            />
          )) :
          <p>
            Ops! Não encontramos nenhuma ferramenta com o nome &quot;{searchedName}&quot; fornecido.
            Que tal tentar um termo diferente?
          </p>
      }
      <ToolModal />
    </section>
  );
}
