import './App.css'
import InputField from './components/InputField'
import TaskList from './components/TaskList'
import { Routes, Route } from "react-router-dom";
import Navigate from './layout/Navigate';

function App() {

  return (
<>
<Navigate/>

    <Routes>
      <Route path="/" element={<InputField />} />
      <Route path="/tasklist" element={<TaskList />} />
   </Routes>
</>
  )
}

export default App
