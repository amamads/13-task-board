import type { Task } from "@/data/tasks-data";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../../atoms/checkbox";
import { PriorityIcon } from "../../atoms/PriotityIcon";
import { SortableHeader } from "./SortableHeader";
import { StatusIcon } from "../../atoms/StatusIcon";

export const tasksColumns: ColumnDef<Task>[] = [
  {
    id: "checkbox",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        checked={row.getIsSelected()}
      />
    ),
  },
  {
    accessorKey: "taskId",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableHeader column={column} lable="Title" />,
  },
  {
    accessorKey: "status",
    filterFn: (row, columnId, filterValues: string[]) => {
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
    header: ({ column }) => <SortableHeader column={column} lable="Status" />,
    cell: (row) => (
      <div className="flex space-x-2">
        <StatusIcon status={row.getValue() as string} />
        <p>{String(row.getValue())}</p>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    filterFn: (row, columnId, filterValues: string[]) => {
      if (!Array.isArray(filterValues) || filterValues.length === 0)
        return true;
      return filterValues.some((s) => s === row.getValue(columnId));
    },
    header: ({ column }) => <SortableHeader column={column} lable="Priority" />,
    cell: (row) => (
      <div className="flex space-x-2">
        <PriorityIcon priority={row.getValue() as string} />
        <p>{String(row.getValue())}</p>
      </div>
    ),
  },
];
