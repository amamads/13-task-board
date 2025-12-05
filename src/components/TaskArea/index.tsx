import React, { createContext, useState, type Dispatch } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import { PriorityDropDown } from '../drop-downs/PriorityDropDown'
import { ViewColumnsDropDoun } from '../drop-downs/ViewColumnsDropDoun'
import TasksTable from './TasksTable'
import { StatusDropDown } from '../drop-downs/StatusDropDown'
import type {
    VisibilityState,
    RowSelectionState,
    Table as TableType
} from '@tanstack/react-table'
import FooterArea from './FooterArea'
import { type Task, tasks } from '@/data/tasks-data'
import {
    getCoreRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
    type ColumnFiltersState,
    getFilteredRowModel,
    getPaginationRowModel
} from "@tanstack/react-table"
import { tasksColumns } from './tasks-columns';


export function TaskArea() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState({
        pageIndex: 1,
        pageSize: 5
    })
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

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
            columnVisibility
        },
    });

    return (
        <Card className='px-7 mt-5 max-w-300 mx-auto'>
            <CardHeader >
                <div className='space-y-2'>
                    <h1 className='text-3xl'>Welcome Back!</h1>
                    <p className='text-sm text-muted-foreground'>Here's a list of your tasks for this month.</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <SearchInput table={table} />

                        <StatusDropDown table={table} />
                        <PriorityDropDown table={table} />

                        <Button
                            variant={'ghost'}
                            className='h-10 hidden'
                        >
                            <span>Reset</span>
                            <IoCloseSharp />
                        </Button>
                    </div>

                    <div className='flex items-center gap-2'>
                        <ViewColumnsDropDoun table={table} />
                        <Button
                            onClick={() => alert('this is a demo button')}
                        >Add Task</Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <TasksTable table={table} />
            </CardContent>
            <CardFooter>
                <FooterArea table={table} />
            </CardFooter>
        </Card>
    )
}
