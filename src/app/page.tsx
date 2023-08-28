'use client'

import Header from "@components/Header";
import ToolCard from "@components/ToolCard";
import { useToolsContext } from "@context/tools";

export default function Home() {
  const { tools } = useToolsContext();
  return (
    <main className="flex flex-col h-screen max-w-7xl mx-auto">
      <Header />
      <section className="p-4 flex justify-center flex-wrap gap-5">
        {tools.map(({ app_id, name, icon, color }) => (
          <ToolCard
            key={app_id}
            name={name}
            iconUrl={icon}
            bgColor={color}
          />
        ))}
      </section>
    </main>
  )
}
