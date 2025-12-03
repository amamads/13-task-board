import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useTheme } from './theme-provider'
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';

export function ModeToggle() {

    const { setTheme } = useTheme();
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size='lg'>
                    <Moon className='hidden dark:inline' />
                    <Sun className='dark:hidden' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                >
                    <Sun />
                    light</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                >
                    <Moon />
                    dark</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                >
                    <MonitorCog />
                    system</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
