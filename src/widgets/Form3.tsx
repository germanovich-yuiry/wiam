import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import type { IForm3Props } from "../types/Form3.type"
import axios from "axios"
import styled from "styled-components"

import PortalModal from "../shared/ui/Portal"
import Note from "../shared/ui/Note"

const Form = styled.form`
  width: 320px;
  height: auto;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  padding: 32px;

  label {
    display: block;
    margin-bottom: 4px;
  }

  .input {
    margin-bottom: 12px;
    margin-right: 8px;
  }

  .value {
    font-weight: bold;
  }

  .next {
    background-color: green;
    border: 1px solid green;
    border-radius: 12px;
    padding: 8px;
    color: white;
  }

  .prev {
    border: 1px solid orange;
    background-color: orange;
    padding: 8px;
    border-radius: 12px;
    margin-right: 12px;
    color: white;
  }

  .effect {
    opacity: 100%;
  }

  .effect:hover {
    opacity: 95%;
  }
`

const ButtonBlock = styled.div`
  margin-top: 12px;
`

const Form3: React.FC<IForm3Props> = ({ formData }) => {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = useState<number>(200)
  const [loanTerm, setLoanTerm] = useState<number>(10)
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post("https://dummyjson.com/products/add", {
      title: `${formData.firstName} ${formData.lastName}`,
    })
    setShowModal(true)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sum">Сумма займа</label>
          <input
            className="input"
            type="range"
            min="200"
            max="1000"
            step="100"
            value={loanAmount}
            id="sum"
            onChange={e => setLoanAmount(Number(e.target.value))}
          />
          <span className="value">{loanAmount}</span>
        </div>
        <div>
          <label htmlFor="loan-term">Срок займа (дни)</label>
          <input
            className="input"
            type="range"
            min="10"
            max="30"
            step="1"
            value={loanTerm}
            id="loan-term"
            onChange={e => setLoanTerm(Number(e.target.value))}
          />
          <span className="value">{loanTerm}</span>
        </div>
        <ButtonBlock>
          <button
            className="prev effect"
            type="button"
            onClick={() => navigate(-1)}
          >
            Назад
          </button>
          <button className="next effect" type="submit">
            Подать заявку
          </button>
        </ButtonBlock>
      </Form>

      <PortalModal open={showModal} onClose={() => setShowModal(false)}>
        <Note
          firstName={formData.firstName}
          lastName={formData.lastName}
          loanAmount={loanAmount}
          loanTerm={loanTerm}
        />
      </PortalModal>
    </div>
  )
}

export default Form3
