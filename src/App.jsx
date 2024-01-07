import { Route,BrowserRouter as Router,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Home,Projects,Contact,About} from "./pages/index.js"

function App() {
  return (
   <main>
    <Router className="bg-slate-300/20">
      <Navbar className="z-10000"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
   </main>
  )
}

export default App