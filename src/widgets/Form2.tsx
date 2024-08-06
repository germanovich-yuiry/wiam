import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

const Form = styled.form`
  width: 320px;
  height: auto;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  padding: 32px;

  .label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
  }
  .input {
    width: 100%;
    height: 28px;
    margin-bottom: 12px;
    margin-right: 8px;
    border-radius: 4px;
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
  .effect: hover {
    opacity: 95%;
  }
`

const ButtonBlock = styled.div`
  margin-top: 12px;
`

const Form2 = ({ formData, setFormData }) => {
  const navigate = useNavigate()
  const [workplaces, setWorkplaces] = useState([])
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchWorkplaces = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        )
        setWorkplaces(response.data)
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error)
      }
    }
    fetchWorkplaces()
  }, [])

  const handleChange = e => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.workplace) newErrors.workplace = "Место работы обязательно."
    if (!formData.address) newErrors.address = "Адрес проживания обязателен."
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      navigate("/form3")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="workplace">
          Место работы
        </label>
        <select
          className="input"
          id="workplace"
          name="workplace"
          onChange={handleChange}
          required
        >
          <option value="">Выберите место работы</option>
          {workplaces.map(workplace => (
            <option key={workplace.id} value={workplace.id}>
              {workplace.name}
            </option>
          ))}
        </select>
        {errors.workplace && <span>{errors.workplace}</span>}
      </div>
      <div>
        <label className="label">Адрес проживания</label>
        <input
          className="input"
          type="text"
          name="address"
          onChange={handleChange}
          required
        />
        {errors.address && <span>{errors.address}</span>}
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
          Далее
        </button>
      </ButtonBlock>
    </Form>
  )
}

export default Form2
