import { TaskArea } from "./components/pages/TaskArea";
import { Navbar } from "./components/molecules/Navbar";

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
