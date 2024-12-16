import { LoaderIcon } from "lucide-react";
import { PaginationStatus } from "convex/react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Doc } from "../../../convex/_generated/dataModel";
import { DocumentRow } from "./documentRow";

interface DocumentsTableProps {
  documents: Doc<"documents">[] | undefined;
  loadMore: (numItems: number) => void;
  status: PaginationStatus;
}

export const DocumentsTable = ({
  documents,
  loadMore,
  status,
}: DocumentsTableProps) => {
  return (
    <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
      {documents === undefined ? (
        <div className="flex items-center justify-center h-24">
          <LoaderIcon className="size-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead>名称</TableHead>
              <TableHead>&nbsp;</TableHead>
              <TableHead className="hidden md:table-cell">从属</TableHead>
              <TableHead className="hidden md:table-cell">创建日期</TableHead>
            </TableRow>
          </TableHeader>
          {documents.length === 0 ? (
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="h-24 text-center text-muted-foreground "
                >
                  无文档
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map((document) => (
                <DocumentRow key={document._id} document={document} />
              ))}
            </TableBody>
          )}
        </Table>
      )}
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => loadMore(5)}
          disabled={status !== "CanLoadMore"}
        >
          {status === "CanLoadMore" ? "加载更多" : "已无更多"}
        </Button>
      </div>
    </div>
  );
};
