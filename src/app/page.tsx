'use client'

import Header from "@components/Header";
import ToolsWrapper from "@components/ToolsWrapper";

export default function Home() {
  return (
    <main className="flex flex-col h-screen max-w-7xl mx-auto">
      <Header />
      <ToolsWrapper />
    </main>
  )
}
