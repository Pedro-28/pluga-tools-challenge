import { ChevronsLeft, ChevronsRight } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { useToolsContext } from "@context/tools";
import Button from "./Button";

export default function PaginationControls() {
  const { hasPrevPage, hasNextPage, totalTools } = useToolsContext();
  const searchParams = useSearchParams();
  const router = useRouter();

  const toolsPerPage = searchParams.get("per_page") ?? "12";
  const page = searchParams.get("page") ?? "1";

  const totalPages = Math.ceil(totalTools / Number(toolsPerPage));

  const pageNumbers = Array.from({ length: totalPages }).map((_, i) => i + 1);

  if (!pageNumbers.length) return null;

  return (
    <div className="w-full h-32 flex justify-center items-center gap-2">
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}`);
        }}
      >
        <ChevronsLeft size="1.7rem" />
      </Button>

      {pageNumbers.map((pageNum) => (
        <Button
          key={`page-${pageNum}`}
          className={
            page === `${pageNum}`
              ? "border-sky-500 text-sky-500 -translate-y-1 hidden sm:block"
              : "hidden sm:block"
          }
          onClick={() => {
            router.push(`/?page=${pageNum}`);
          }}
        >
          {pageNum}
        </Button>
      ))}
      <p className="text-lg font-medium text-zinc-500 sm:hidden">{`${page}/${totalPages}`}</p>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}`);
        }}
      >
        <ChevronsRight size="1.7rem" />
      </Button>
    </div>
  );
}
