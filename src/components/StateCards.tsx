import React, { type ReactNode } from 'react'
import { FaCheckCircle, FaExclamationTriangle, FaTasks } from 'react-icons/fa'
import { Card, CardContent, CardTitle } from './ui/card'

type SingleCard = { title: string, value: string, icon: ReactNode }

export  function StateCards() {
    const states: SingleCard[] = [
        {
            title: 'Total Tasks',
            value: '120',
            icon: <FaTasks />
        },
        {
            title: 'Completed TAsks',
            value: '85',
            icon: <FaCheckCircle />
        },
        {
            title: 'High Priorty Tasks',
            value: '16',
            icon: <FaExclamationTriangle />
        },
    ]
    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-1 p-6 mt-7 gap-6'>
            {states.map((state, i) => (
                <SingleStateCard singleCard={state} key={i} />
            ))}
        </div>
    )
}

function SingleStateCard({ singleCard: { title, icon, value } }: { singleCard: SingleCard }) {
    return (
        <Card className='p-5 flex flex-col gap-2'>
            <CardTitle className='flex items-center justify-between'>
                <span className='text-sm font-semibold text-slate-500'>{title}</span>
                <div className='size-7 rounded-md flex items-center justify-center text-sm bg-primary/25 font-bold text-primary'>{icon}</div>
            </CardTitle>
            <CardContent className='text-3xl font-bold'>{value}</CardContent>
        </Card>
    )

}