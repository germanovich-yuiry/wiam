import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Место работы</label>
        <select name="workplace" onChange={handleChange} required>
          <option value="">Выберите место работы</option>
          {workplaces.map(workplace => (
            <option key={workplace.id} value={workplace.id}>
              {workplace.name} {/* Предполагая, что есть свойства id и name */}
            </option>
          ))}
        </select>
        {errors.workplace && <span>{errors.workplace}</span>}
      </div>
      <div>
        <label>Адрес проживания</label>
        <input type="text" name="address" onChange={handleChange} required />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <button type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
      <button type="submit">Далее</button>
    </form>
  )
}

export default Form2
