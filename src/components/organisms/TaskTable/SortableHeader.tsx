import type { Task } from "@/data/tasks-data";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Column } from "@tanstack/react-table";
import {
    ArrowUpDown
} from "lucide-react";
import { GrHide } from "react-icons/gr";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

type SortableHeaderProps = {
  column: Column<Task, unknown>;
  lable: string;
};

export const SortableHeader: React.FC<SortableHeaderProps> = ({ column, lable }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted == "asc"
      ? IoMdArrowUp
      : isSorted === "desc"
      ? IoMdArrowDown
      : ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-start py-3.5 select-none cursor-pointer p-2 gap-1 ${
            isSorted && "text-primary"
          }`}
        >
          {lable}
          <SortingIcon className="size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IoMdArrowUp className="size-4 mr-2" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <IoMdArrowDown className="size-4 mr-2" />
          Desc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.clearSorting()}>
          <GrHide className="size-4 mr-2 opacity-90" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
