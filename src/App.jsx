import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayouth from "./Layout/AuthLayouth"
import Index from "./pages/Index.jsx"
import Services from "./pages/Services"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayouth/>}>
          <Route index element={<Index/>}/>
          <Route path="/services" element={<Services/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
