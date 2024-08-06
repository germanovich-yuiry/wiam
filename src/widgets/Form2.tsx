import React, { useEffect, useState, FC } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import SelectInput from "../shared/ui/SelectInput"
import TextInput from "../shared/ui/TextInput"
import type { IForm2Props } from "../types/Form2.type"

const Form = styled.form`
  width: 320px;
  height: auto;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  padding: 32px;

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

const Form2: FC<IForm2Props> = ({ formData, setFormData }) => {
  const navigate = useNavigate()
  const [workplaces, setWorkplaces] = useState<{ id: string; name: string }[]>(
    []
  )
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

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

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.workplace) newErrors.workplace = "Место работы обязательно."
    if (!formData.address) newErrors.address = "Адрес проживания обязателен."
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <SelectInput
        name="workplace"
        value={formData.workplace}
        onChange={handleChange}
        label="Место работы"
        error={errors.workplace}
        options={[
          { value: "", label: "Выберите место работы" },
          ...workplaces.map(workplace => ({
            value: workplace.id,
            label: workplace.name,
          })),
        ]}
      />

      <TextInput
        name="address"
        value={formData.address}
        onChange={handleChange}
        label="Адрес проживания"
        error={errors.address}
      />

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
