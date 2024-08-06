import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import MaskedInput from "../shared/ui/MaskedInput"
import TextInput from "../shared/ui/TextInput"
import SelectInput from "../shared/ui/SelectInput"

import type { IForm1Props } from "../types/Form1.type"

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
    border: 1px solid #ccc;
    text-indent: 12px;
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
  margin-top: 24px;
`

const Form1: React.FC<IForm1Props> = ({ formData, setFormData }) => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.phone) newErrors.phone = "Телефон обязателен."
    if (!formData.firstName) newErrors.firstName = "Имя обязательно."
    if (!formData.lastName) newErrors.lastName = "Фамилия обязательна."
    if (!formData.gender) newErrors.gender = "Пол обязателен."
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      navigate("/form2")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MaskedInput
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        label="Телефон"
        error={errors.phone}
        mask="8 999 999 9999"
      />
      <TextInput
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        label="Имя"
        error={errors.firstName}
      />
      <TextInput
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        label="Фамилия"
        error={errors.lastName}
      />
      <SelectInput
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        label="Пол"
        error={errors.gender}
        options={[
          { value: "male", label: "Мужской" },
          { value: "female", label: "Женский" },
        ]}
      />
      <ButtonBlock>
        <button className="next" type="submit">
          Далее
        </button>
      </ButtonBlock>
    </Form>
  )
}

export default Form1
