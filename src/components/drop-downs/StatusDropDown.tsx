import { useEffect, useState } from "react"
import { IoMdArrowUp } from "react-icons/io"
import { IoArrowBack, IoArrowDown } from "react-icons/io5"
import type { IconType } from "react-icons/lib"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { GoPlusCircle } from "react-icons/go";
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import { Command, CommandGroup, CommandInput, CommandItem } from "../ui/command"
import { Checkbox } from "../ui/checkbox"
import { Circle, CircleCheckBig, CircleOff, CircleQuestionMark, Timer } from "lucide-react"
import { Label } from "../ui/label"
import type { Task } from "@/data/tasks-data"
import type { Table as TableType } from "@tanstack/react-table"

type Status = {
    value: string,
    lable: string,
    icon: IconType,
    count: number,
}

const statuses: Status[] = [
    {
        value: 'backlog',
        lable: 'Backlog',
        icon: CircleQuestionMark,
        count: 0,
    },
    {
        value: 'todo',
        lable: 'Todo',
        icon: Circle,
        count: 0,
    },
    {
        value: 'inProgress',
        lable: 'In Progress',
        icon: Timer,
        count: 0,
    },
    {
        value: 'done',
        lable: 'Done',
        icon: CircleCheckBig,
        count: 0,
    },
    {
        value: 'canceled',
        lable: 'Canceled',
        icon: CircleOff,
        count: 0,
    },
]

export const StatusDropDown = ({ table }: { table: TableType<Task> }) => {
    const [selectedStatus, setSelectedStatus] = useState<string[]>([])

    useEffect(() => {
        table.getColumn('status')?.setFilterValue(selectedStatus)
    }, [selectedStatus])
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        size={'sm'}
                        variant={'outline'}
                        className="h-10 justify-start border-dashed px-2"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <GoPlusCircle />
                                <span>Status</span>
                            </div>

                            <Separator
                                orientation="vertical"
                                className="h-6 border border-gray-300"
                            />

                            {/* <div>
                                <Badge variant={'secondary'}>Low</Badge>
                                <Badge variant={'secondary'}>Medium</Badge>
                            </div> */}
                            <div>
                                {selectedStatus.map(status => (
                                    <Badge variant={'secondary'}>{status}</Badge>
                                ))}
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="p-0 w-52" side="bottom" align="center">
                    <Command>
                        <CommandInput placeholder="Change priority ..." />
                        <CommandGroup>
                            {statuses.map(({ value, lable, icon: Icon }) => (
                                <CommandItem
                                    key={value}
                                    value={value}
                                    className="flex justify-between"
                                    onSelect={(value) => {
                                        // setSelectedStatus(
                                        //     statuses.find((priority => priority.value === value)) || null
                                        // )
                                    }}
                                >
                                    <Label className="flex items-center gap-3">
                                        {/* <Checkbox /> */}
                                        <Checkbox
                                            onCheckedChange={(checked) => {
                                                setSelectedStatus(prev => {
                                                    const arr = prev ?? []
                                                    if (checked) return arr.includes(lable) ? arr : [...arr, lable]
                                                    return arr.filter(s => s !== lable)
                                                })
                                            }}
                                        />
                                        <Icon />
                                        <span>{lable}</span>
                                    </Label>
                                    <span>{
                                        table.getCoreRowModel().rows
                                            .filter(row => row.getValue("status") === lable)
                                            .length
                                    }</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

