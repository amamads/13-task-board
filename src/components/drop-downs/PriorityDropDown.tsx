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
import { Label } from "../ui/label"
import type { Task } from "@/data/tasks-data"
import type { Table as TableType } from "@tanstack/react-table"

type Status = {
    value: string,
    lable: string,
    icon: IconType
}

const statuses: Status[] = [
    {
        value: 'low',
        lable: 'Low',
        icon: IoArrowDown
    },
    {
        value: 'medium',
        lable: 'Medium',
        icon: IoArrowBack
    },
    {
        value: 'high',
        lable: 'High',
        icon: IoMdArrowUp
    },
]

export const PriorityDropDown = ({ table }: { table: TableType<Task> }) => {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<string[]>([])

    useEffect(() => {
        table.getColumn('priority')?.setFilterValue(selectedStatus)
    }, [selectedStatus])
    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        size={'sm'}
                        variant={'outline'}
                        className="h-10 justify-start border-dashed px-2"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <GoPlusCircle />
                                <span>Priority</span>
                            </div>

                            <Separator
                                orientation="vertical"
                                className="h-6 border border-gray-300"
                            />

                            <div>
                                {selectedStatus.map(status => (
                                    <Badge variant={'secondary'}>{status}</Badge>
                                ))}
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="p-0 w-52" side="bottom" align="center">
                    <Command
                        onValueChange={e => {
                            console.log(e);
                            console.log('object');
                        }}
                    >
                        <CommandInput placeholder="Change priority ..." />
                        <CommandGroup>
                            {statuses.map(({ value, lable, icon: Icon }) => (
                                <CommandItem
                                    key={value}
                                    value={value}
                                    className="flex justify-between"
                                >
                                    <Label className="flex items-center gap-3">
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
                                            .filter(row => row.getValue("priority") === lable)
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

