import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../atoms/dropdown-menu";
import { Button } from "../../atoms/button";
import { BiColumns } from "react-icons/bi";
import type { Task } from "@/data/tasks-data";
import type { Table as TableType } from "@tanstack/react-table";

export const ViewColumnsDropDoun = ({ table }: { table: TableType<Task> }) => {
  const dropdownColumnsIds = ["title", "status", "priority"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-11 px-8 ">
          <BiColumns />
          <span>View</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) =>
            dropdownColumnsIds.some((columnId) => columnId === column.id)
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              id={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
