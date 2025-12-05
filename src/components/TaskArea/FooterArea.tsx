import React, { useContext, useEffect, useState } from 'react'
import { TableContext } from '.';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { ChevronLast, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';


export default function FooterArea() {
    const table = useContext(TableContext)?.table;

    const pageSizes = [5, 10, 20, 25, 30, 40, 50]
    return (
        <div className='flex justify-between w-full items-center'>
            <p>0 of 100 row(s) selected.</p>

            <div className='flex items-center gap-8'>
                <div className='flex gap-3 items-center'>
                    <p>Row per page</p>
                    <Select
                        onValueChange={e => table?.setPageSize(Number(e))}
                    // value={pageSize}
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
                <p>
                    Page
                    {table?.getState().pagination.pageIndex}
                    of
                    {table?.getPageCount()}
                </p>

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
