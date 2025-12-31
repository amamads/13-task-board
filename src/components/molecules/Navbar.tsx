import { ListTodo } from 'lucide-react'
import { ModeToggle } from '../organisms/ModeToggle'
import { Button } from '../atoms/button'

export function Navbar() {
    return (
        <nav className='flex items-center justify-between py-5'>
            <div className='flex gap-1.5'>
                <div className='bg-primary p-1.5 rounded-lg '>
                    <ListTodo className=' size-7' aria-hidden='true' />
                </div>
                <h1 className='text-2xl'>
                    Task
                    <span className='text-primary'>Board</span>
                </h1>
            </div>

            <div className='flex items-center gap-4'>
                <Button size='lg' className='text-lg'>Add Task</Button>
                <ModeToggle />
            </div>
        </nav>
    )
}
