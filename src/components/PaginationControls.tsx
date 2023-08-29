import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import { useRouter, useSearchParams } from "next/navigation";
import { useToolsContext } from "@context/tools";
import { Button } from "./ui/button";

export default function PaginationControls() {
  const { hasPrevPage, hasNextPage, totalTools } = useToolsContext();
  const searchParams = useSearchParams();
  const router = useRouter();

  const toolsPerPage = searchParams.get('per_page') ?? '12';
  const page = searchParams.get('page') ?? '1';

  const pageNumbers = Array.from({ length: Math.ceil(totalTools / Number(toolsPerPage)) })
    .map((_, i) => i + 1);

  if (!pageNumbers.length) return null;

  return (
    <div className='w-full flex justify-center items-center gap-2 p-4'>
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}`)
        }}>
        <ChevronsLeft />
      </Button>

      {
        pageNumbers.map((pageNum) => (
          <Button
            key={`page-${pageNum}`}
            onClick={() => {
              router.push(`/?page=${pageNum}`)
            }}
          >
            {pageNum}
          </Button>
        ))
      }

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}`)
        }}>
        <ChevronsRight />
      </Button>
    </div>
  );
}
