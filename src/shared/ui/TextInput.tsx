import React from "react"
import styled from "styled-components"

interface TextInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: string
  type?: string
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
const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  type = "text",
}) => (
  <Container>
    <label className="label">{label}</label>
    <input
      className="input"
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
    {error && <span>{error}</span>}
  </Container>
)

export default TextInput
