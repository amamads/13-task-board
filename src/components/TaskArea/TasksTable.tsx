import { type Task, tasks } from '@/data/tasks-data'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table'
import { flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable, type Column, type ColumnDef, type ColumnFiltersState, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Star } from "lucide-react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { GrHide } from "react-icons/gr";
import { tasksColumns } from './tasks-columns';
import { useContext, useEffect, useState } from 'react';
import { TableContext } from '.';
import { CardContent, CardFooter } from '../ui/card';



export default function TasksTable() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState({
        pageIndex: 1,
        pageSize: 5
    })
    const setTable = useContext(TableContext)?.setTable;

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

        state: { sorting, globalFilter, columnFilters, pagination },
        // initialState: {
        //     sorting: [
        //         {
        //             id: 'priority',
        //             desc: false,
        //         }
        //     ]
        // }
    });
    useEffect(() => {
        setTable?.(table)
    }, [table])
    // console.log(table.getRowModel().rows[0].getVisibleCells())
    return (
        <>

            <CardContent>
                <Table>
                    <TableCaption>yahohoho</TableCaption>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
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
            </CardContent>
            <CardFooter>
                {/* <FooterArea /> */}
            </CardFooter>

        </>
    )
}
