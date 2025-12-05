import React, { createContext, useState, type Dispatch } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import { PriorityDropDown } from '../drop-downs/PriorityDropDown'
import { ViewColumnsDropDoun } from '../drop-downs/ViewColumnsDropDoun'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { tasks, type Task } from '@/data/tasks-data'
import TasksTable from './TasksTable'
import { StatusDropDown } from '../drop-downs/StatusDropDown'
import { Separator } from '../ui/separator'
import { type Table as TableType } from '@tanstack/react-table'
import FooterArea from './FooterArea'

type TableContextType = {
    table: TableType<Task> | undefined,
    setTable: Dispatch<React.SetStateAction<TableType<Task> | undefined>>,
    // setTable: () => void,
}

export const TableContext = createContext<TableContextType | null>(null);


export function TaskArea() {
    const [table, setTable] = useState<TableType<Task>>()
    return (
        <div className='px-7 mt-5'>
            <TableContext.Provider value={{ table, setTable }}>
                <Card>
                    <CardHeader >
                        <div className='space-y-2'>
                            <h1 className='text-3xl'>Welcome Back!</h1>
                            <p className='text-sm text-muted-foreground'>Here's a list of your tasks for this month.</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <SearchInput />

                                <PriorityDropDown />
                                <StatusDropDown />

                                <Button variant={'ghost'} className='h-10'>
                                    <span>Reset</span>
                                    <IoCloseSharp />
                                </Button>
                            </div>

                            <div className='flex items-center gap-2'>
                                <ViewColumnsDropDoun />
                                <Button>Add Task</Button>
                            </div>
                        </div>
                    </CardHeader>
                    {/* <CardContent>
                        <TasksTable />
                    </CardContent>
                    <CardFooter>
                        <FooterArea />
                    </CardFooter> */}
                </Card>
            </TableContext.Provider>
        </div>
    )
}
