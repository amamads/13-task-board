import { type Task, tasks } from '@/data/tasks-data'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { flexRender, getCoreRowModel, useReactTable, type Column, type ColumnDef } from "@tanstack/react-table"
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ArrowUpDown, Star } from "lucide-react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { GrHide } from "react-icons/gr";

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
                <div className={`flex items-start py-3.5 select-none cursor-pointer p-2 gap-1 ${isSorted && 'text-primary'}`}
                    aria-label={`Sort by ${lable}`}
                >
                    {lable}
                    <SortingIcon className="size-4" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                    <IoMdArrowUp className="size-4 mr-2" />
                    Asc
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                    <IoMdArrowDown className="size-4 mr-2" />
                    Desc
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <GrHide className="size-4 mr-2 opacity-90" />
                    Hide
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}



export const tasksColumns: ColumnDef<Task>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => {
            <>
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={value => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
                <p>yahohoh</p>
            </>
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'taskId',
        header: "Task"
    },
    {
        accessorKey: 'isFavorite',
        header: '',
        cell: ({ row }) => {
            const FavoriteIcon = row.original.isFavorite && Star
            return FavoriteIcon && <FavoriteIcon size={14} />
        }
    },
    {
        accessorKey: 'title',
        header: ({ column }) => <SortableHeader column={column} lable="Title" />
    }
]


export default function TasksTable() {
    const table = useReactTable({
        data: tasks,
        columns: tasksColumns,
        getCoreRowModel: getCoreRowModel(),
    });
    console.log(table.getRowModel().rows[0].getVisibleCells())
    return (
        <Table>
            <TableCaption>yahohoho</TableCaption>
            <TableHeader>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow>
                        {headerGroup.headers.map(header => (
                            <TableHead>
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}

                {/* {table.getHeaderGroups()[0].headers.map(header => (
                    <TableHead key={header.id}>
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </TableHead>
                ))} */}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows.map(row => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableCell key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
