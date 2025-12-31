import { tasks } from "@/data/tasks-data";
import type { RowSelectionState, VisibilityState } from "@tanstack/react-table";
import {
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import   FooterArea from "../organisms/FooterArea";
import HeaderArea from "../organisms/HeaderArea";
import { tasksColumns } from "../organisms/TaskTable/tasks-columns";
import TasksTable from "../organisms/TaskTable/TasksTable";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";

export function TaskArea() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 5,
  });
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: tasks,
    columns: tasksColumns,
    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    onRowSelectionChange: setRowSelection,

    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      globalFilter,
      columnFilters,
      pagination,
      rowSelection,
      columnVisibility,
    },
  });

  return (
    <Card className="px-7 mt-5 max-w-300 mx-auto">
      <CardHeader>
        <HeaderArea table={table} />
      </CardHeader>
      <CardContent>
        <TasksTable table={table} />
      </CardContent>
      <CardFooter>
        <FooterArea table={table} />
      </CardFooter>
    </Card>
  );
}
