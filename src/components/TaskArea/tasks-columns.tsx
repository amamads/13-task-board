
import { flexRender, getCoreRowModel, useReactTable, type Column, type ColumnDef, type Table } from "@tanstack/react-table"
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpDown, Circle, CircleCheckBig, CircleOff, CircleQuestionMark, Star, Timer } from "lucide-react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { GrHide } from "react-icons/gr";
import type { Task } from "@/data/tasks-data";
import { Input } from "../ui/input";

type SortableHeaderProps = {
    column: Column<Task, unknown>,
    lable: string,
}

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, lable }) => {
    const isSorted = column.getIsSorted();
    const SortingIcon =
        isSorted == 'asc'
            ? IoMdArrowUp
            : isSorted === 'desc'
                ? IoMdArrowDown
                : ArrowUpDown;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={`flex items-start py-3.5 select-none cursor-pointer p-2 gap-1 ${isSorted && 'text-primary'}`}>
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
    )
}
// function StatusIcon({ status }: { status: Task['status'] }) {
function StatusIcon({ status }: { status: string }) {
    let Icon;
    switch (status) {
        case "Backlog": Icon = CircleQuestionMark;
            break;
        case "In Progress": Icon = Timer;
            break;
        case "Done": Icon = CircleCheckBig;
            break;
        case "Canceled": Icon = CircleOff;
            break;
        default: Icon = Circle;
    }
    return <Icon className="size-4" />;
}
function PriorityIcon({ priority }: { priority: string }) {
    let Icon;
    switch (priority) {
        case "Low": Icon = ArrowDown;
            break;
        case "Medium": Icon = ArrowRight;
            break;
        default: Icon = ArrowUp;
    }
    return <Icon className="size-4" />;
}

function sortingFn(column: any) {

}

export const tasksColumns: ColumnDef<Task>[] = [

    {
        id: 'checkbox',
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
        accessorKey: 'taskId',
        header: "Task",
    },
    {
        accessorKey: 'title',
        header: ({ column }) => <SortableHeader column={column} lable="Title" />
    },
    {
        accessorKey: 'status',
        filterFn: (row, columnId, filterValues: string[]) => {
            if (!Array.isArray(filterValues) || filterValues.length === 0) return true
            return filterValues.some(s => s === row.getValue(columnId))
        },
        header: ({ column }) => <SortableHeader column={column} lable="Status" />,
        cell: (row) => (
            <div className="flex space-x-2">
                <StatusIcon status={(row.getValue() as string)} />
                <p>{String(row.getValue())}</p>
            </div>
        )
    },
    {
        accessorKey: 'priority',
        filterFn: (row, columnId, filterValues: string[]) => {
            if (!Array.isArray(filterValues) || filterValues.length === 0) return true
            return filterValues.some(s => s === row.getValue(columnId))
        },
        header: ({ column }) => <SortableHeader column={column} lable="Priority" />,
        cell: (row) => (
            <div className="flex space-x-2">
                <PriorityIcon priority={(row.getValue() as string)} />
                <p>{String(row.getValue())}</p>
            </div>
        )
    },
]