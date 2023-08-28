import { useToolsContext } from "@context/tools";
import ToolCard from "./ToolCard";


export default function ToolsWrapper() {
  const { tools, searchedValue } = useToolsContext();

  const filteredTools = tools.filter(({ name }) => (
    name.toLowerCase().includes(searchedValue.toLowerCase())
  ));

  return (
    <section className="p-4 flex justify-center flex-wrap gap-5">
      {
        filteredTools.length ?
          filteredTools.map(({ app_id, name, icon, color }) => (
            <ToolCard
              key={app_id}
              name={name}
              iconUrl={icon}
              bgColor={color}
            />
          )) :
          <p>
            Ops! Não encontramos nenhuma ferramenta com o nome &quot;{searchedValue}&quot; fornecido.
            Que tal tentar um termo diferente?
          </p>
      }
    </section>
  );
}
