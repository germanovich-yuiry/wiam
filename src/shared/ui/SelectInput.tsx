import React from "react"
import styled from "styled-components"

interface SelectInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  label: string
  error?: string
  options: { value: string; label: string }[]
}

const Container = styled.div`
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
`

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  options,
}) => (
  <Container>
    <label className="label">{label}</label>
    <select
      className="input"
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      <option value="">Выберите</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <span>{error}</span>}
  </Container>
)

export default SelectInput
