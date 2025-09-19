import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/components/ui/table";
import { Button } from "../../../shared/components/ui/button";
import { annotationData, AnnotationItem } from "../data";
import { useNavigate } from "@tanstack/react-router";

// Define the columns function that accepts navigate
const createColumns = (navigate: any): ColumnDef<AnnotationItem>[] => [
  {
    accessorKey: "_id",
    header: "ID",
    cell: ({ row }) => <div className="font-medium">#{row.getValue("_id")}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <div className="flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            type === "SPEECH_TO_TEXT" 
              ? "bg-blue-100 text-blue-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {type === "SPEECH_TO_TEXT" ? "Speech to Text" : "Text to Text"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
    cell: ({ row }) => <div>{row.getValue("assignedTo")}</div>,
  },
  {
    accessorKey: "assignedBy",
    header: "Assigned By",
    cell: ({ row }) => <div>{row.getValue("assignedBy")}</div>,
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const deadline = row.getValue("deadline") as string;
      const isOverdue = new Date(deadline) < new Date();
      return (
        <div className={`${isOverdue ? "text-red-600 font-medium" : "text-gray-700"}`}>
          {deadline}
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const item = row.original;
      let annotationsCount = 0;
      
      if (item.type === "SPEECH_TO_TEXT" && item.speechToText) {
        annotationsCount = item.speechToText.annotations.length;
      } else if (item.type === "TEXT_TO_TEXT" && item.textToText) {
        annotationsCount = item.textToText.annotations?.length || 0;
      }
      
      const hasProgress = annotationsCount > 0;
      
      return (
        <div className="flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            hasProgress 
              ? "bg-green-100 text-green-800" 
              : "bg-gray-100 text-gray-800"
          }`}>
            {hasProgress ? `${annotationsCount} annotation${annotationsCount > 1 ? 's' : ''}` : "Not started"}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              navigate({ 
                to: "/tasks/annotate",
                search: { taskId: item._id }
              });
            }}
          >
            Annotate
          </Button>
        </div>
      );
    },
  },
];

interface AnnotationTasksTableProps {
  data?: AnnotationItem[];
}

export const AnnotationTasksTable: React.FC<AnnotationTasksTableProps> = ({
  data = annotationData,
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  
  const navigate = useNavigate();
  const columns = React.useMemo(() => createColumns(navigate), [navigate]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="rounded-md border h-full">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No annotation tasks found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between space-x-2 py-4 border-t bg-background">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Show
            </p>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="h-8 w-16 rounded border border-input bg-background px-2 text-sm"
            >
              {[5, 10, 20, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <p className="text-sm text-muted-foreground">entries</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            First
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            Last
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing {table.getRowModel().rows.length} of {data.length} results
        </div>
      </div>
    </div>
  );
};