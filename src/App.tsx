import React from 'react'
import { Navbar, StateCards, TaskArea } from './components'

export default function App() {
  return (
    <div className='w-9/10 mx-auto'>
      <Navbar />
      <TaskArea />
      {/* <TasksTable /> */}
      {/* <StateCards /> */}
    </div>
  )
}
