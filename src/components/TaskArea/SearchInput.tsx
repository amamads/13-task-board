import React, { useContext } from 'react'
import { Input } from '../ui/input'
import { TableContext } from '.'

export default function SearchInput() {
    const table = useContext(TableContext)?.table;
    return (
        <Input
            type='text'
            className='h-10'
            placeholder='Filter by tasks...'
            onChange={e => table?.getColumn('title')?.setFilterValue(e.target.value)}
            // value={(table?.getColumn('title')?.getFilterValue() as string) ?? ''}
        />
    )
}
