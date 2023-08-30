"use client";

import PaginationControls from "@components/PaginationControls";
import ToolsWrapper from "@components/ToolsWrapper";
import Header from "@components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-5xl mx-auto">
      <Header />
      <ToolsWrapper />
      <PaginationControls />
    </main>
  );
}
