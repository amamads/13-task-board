import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { BiColumns } from "react-icons/bi";

type Checked = DropdownMenuCheckboxItemProps['checked']

export const ViewColumnsDropDoun = () => {
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showActiveBar, setShowActiveBar] = useState<Checked>(false)
    const [showPanel, setShowPanel] = useState<Checked>(false)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className="h-11 px-8 ">
                    <BiColumns />
                    <span>View</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                >   
                    Title
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showActiveBar}
                    onCheckedChange={setShowActiveBar}
                >   
                    Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={showPanel}
                    onCheckedChange={setShowPanel}
                >   
                    Priority
                </DropdownMenuCheckboxItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
