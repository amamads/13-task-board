import { Input } from '../atoms/input'
import type { Task } from '@/data/tasks-data';
import type { Table as TableType } from '@tanstack/react-table';

export default function SearchInput({ table }: { table: TableType<Task> }) {
    return (
        <Input
            type='text'
            className='h-10'
            placeholder='Filter by tasks...'
            onChange={e => table?.getColumn('title')?.setFilterValue(e.target.value)}
        />
    )
}
