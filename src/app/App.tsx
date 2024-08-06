import { useState } from "react"

import { IFormData } from "../types/FormData.type"

import styled from "styled-components"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Form1 from "../widgets/Form1"
import Form2 from "../widgets/Form2"
import Form3 from "../widgets/Form3"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function App() {
  const [formData, setFormData] = useState<IFormData>({})

  return (
    <Container>
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
    </Container>
  )
}

export default App
