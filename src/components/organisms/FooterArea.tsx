import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import type { Task } from '@/data/tasks-data';
import type { Table as TableType } from '@tanstack/react-table';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import { Button } from '../atoms/button';


export default function FooterArea({ table }: { table: TableType<Task> }) {
    const pageSizes = [5, 10, 20, 25, 30, 40, 50]
    return (
        <div className='flex justify-between w-full items-center'>
            <p>
                {`
                ${table.getSelectedRowModel().rows.length}
                of
                ${table.getPreSelectedRowModel().rows.length}
                row(s) selected.
                
                `}
            </p>

            <div className='flex items-center gap-8'>
                <div className='flex gap-3 items-center'>
                    <p>Row per page</p>
                    <Select
                        onValueChange={e => table?.setPageSize(Number(e))}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={table?.getState().pagination.pageSize ?? '?'} />
                        </SelectTrigger>
                        <SelectContent>
                            {pageSizes.map((size, i) => (
                                <SelectItem key={i} value={String(size)}>{size}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                {table?.getState().pagination.pageIndex === 0
                    ? (
                        <p>
                            Page
                            {table?.getState().pagination.pageIndex + 1}
                            of
                            {table?.getPageCount()}
                        </p>
                    )
                    : (
                        <p>
                            Page
                            {table?.getState().pagination.pageIndex}
                            of
                            {table?.getPageCount() - 1}
                        </p>
                    )}

                <div className='space-x-2'>
                    <Button
                        onClick={() => table?.firstPage()}
                        disabled={!table?.getCanPreviousPage()}
                        variant='outline'
                        className='size-8'
                    >
                        <ChevronsLeft />
                    </Button>
                    <Button
                        onClick={() => table?.previousPage()}
                        disabled={!table?.getCanPreviousPage()}
                        variant='outline'
                        className='size-8'
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        onClick={() => table?.nextPage()}
                        disabled={!table?.getCanNextPage()}
                        variant='outline'
                        className='size-8'
                    >
                        <ChevronRight />
                    </Button>
                    <Button
                        onClick={() => table?.lastPage()}
                        disabled={!table?.getCanNextPage()}
                        variant='outline'
                        className='size-8'
                    >
                        <ChevronsRight />
                    </Button>
                </div>
            </div>

        </div>
    )
}
