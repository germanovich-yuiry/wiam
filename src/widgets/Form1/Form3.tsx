import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import PortalModal from "../../shared/ui/Portal"

const Form3 = ({ formData, setFormData }) => {
  const navigate = useNavigate()
  const [loanAmount, setLoanAmount] = React.useState(200)
  const [loanTerm, setLoanTerm] = React.useState(10)
  const [showModal, setShowModal] = React.useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await axios.post("https://dummyjson.com/products/add", {
      title: `${formData.firstName} ${formData.lastName}`,
    })
    setShowModal(true)
  }

  return (
    <div>
      {!showModal && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Сумма займа</label>
            <input
              type="range"
              min="200"
              max="1000"
              step="100"
              value={loanAmount}
              onChange={e => setLoanAmount(e.target.value)}
            />
            <span>{loanAmount}</span>
          </div>
          <div>
            <label>Срок займа (дни)</label>
            <input
              type="range"
              min="10"
              max="30"
              step="1"
              value={loanTerm}
              onChange={e => setLoanTerm(e.target.value)}
            />
            <span>{loanTerm}</span>
          </div>
          <button type="button" onClick={() => navigate(-1)}>
            Назад
          </button>
          <button type="submit">Подать заявку</button>
        </form>
      )}

      {showModal && (
        <PortalModal open={showModal} onClose={() => setShowModal(false)}>
          {" "}
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>
              Поздравляем, {formData.lastName} {formData.firstName}. Вам
              одобрена ${loanAmount} на {loanTerm} дней.
            </p>
          </div>
        </PortalModal>
      )}
    </div>
  )
}

export default Form3
