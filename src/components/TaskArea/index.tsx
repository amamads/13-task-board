import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SearchInput from './SearchInput'
import { Button } from '../ui/button'
import { IoCloseSharp } from 'react-icons/io5'
import { PriorityDropDown } from '../drop-downs/PriorityDropDown'
import { ViewColumnsDropDoun } from '../drop-downs/ViewColumnsDropDoun'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { tasks, type Task } from '@/data/tasks-data'
import TasksTable from './TasksTable'


export function TaskArea() {
    return (
        <div className='px-7 mt-5'>
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <SearchInput />
                            <PriorityDropDown />
                            <ViewColumnsDropDoun />
                            <Button variant={'ghost'} className='h-10'>
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* <Table>
                        <TableCaption>yahohoho</TableCaption>
                        <TableHeader>
                            <TableRow>
                                {Object.keys(tasks[0]).map(head => (
                                    <TableHead>{head}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map(task => (
                                <TableRow>
                                    {(Object.keys(task) as (keyof Task)[]).map(key => {
                                        console.log(task[key]);
                                        return (
                                            <TableCell>
                                                {String(task[key]) ?? ''}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                            {tasks.map(task => (
                                <TableRow>
                                    {(Object.keys(task) as (keyof Task)[]).map(key => (
                                        <TableCell key={key}>
                                            {String(task[key] ?? "")}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table> */}
                    <TasksTable />
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    )
}
