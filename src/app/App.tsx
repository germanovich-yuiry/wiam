import { useState } from "react"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Form1 from "../widgets/Form1/Form1"
import Form2 from "../widgets/Form1/Form2"
import Form3 from "../widgets/Form1/Form3"

function App() {
  const [formData, setFormData] = useState({})

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/form1" />} />
        <Route
          path="/form1"
          element={<Form1 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/form2"
          element={<Form2 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/form3"
          element={<Form3 formData={formData} setFormData={setFormData} />}
        />
      </Routes>
    </Router>
  )
}

export default App
