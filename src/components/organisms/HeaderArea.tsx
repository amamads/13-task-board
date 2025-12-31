import { IoCloseSharp } from "react-icons/io5";
import SearchInput from "../molecules/SearchInput";
import { PriorityDropDown } from "./TaskTable/PriorityDropDown";
import { StatusDropDown } from "./TaskTable/StatusDropDown";
import { ViewColumnsDropDoun } from "./TaskTable/ViewColumnsDropDoun";
import { Button } from "../atoms/button";
import type { Task } from "@/data/tasks-data";
import type { Table as TableType } from "@tanstack/react-table";

export default function HeaderArea({ table }: { table: TableType<Task> }) {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl">Welcome Back!</h1>
        <p className="text-sm text-muted-foreground">
          Here's a list of your tasks for this month.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SearchInput table={table} />

          <StatusDropDown table={table} />
          <PriorityDropDown table={table} />

          <Button variant={"ghost"} className="h-10 hidden">
            <span>Reset</span>
            <IoCloseSharp />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <ViewColumnsDropDoun table={table} />
          <Button onClick={() => alert("this is a demo button")}>
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
}
