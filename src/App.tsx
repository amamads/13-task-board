import { TaskArea } from "./components/pages/TaskArea";
import { Navbar } from "./components/organisms/Navbar";

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
