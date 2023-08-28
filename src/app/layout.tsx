import './globals.css'
import { ToolsProvider } from '@context/tools'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buscador de ferramentas',
  description: `Explore nosso site abrangente que reúne 
  uma ampla gama de ferramentas existentes no mercado. 
  Conecte-se facilmente com as páginas oficiais de 
  cada ferramenta para obter informações detalhadas.`,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let tools = [];

  try {
    const response = await fetch('https://pluga.co/ferramentas_search.json');

    if (response.status === 200) {
      tools = await response.json();
    } else {
      tools = [];
    }
  } catch (error) {
    tools = [];
  }

  return (
    <html lang="en">
      <body
        className={`bg-slate-300 ${inter.className}`}
      >
        <ToolsProvider tools={tools}>
          {children}
        </ToolsProvider>
      </body>
    </html>
  )
}
