import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 12px;
  .label {
    display: block;
    margin-bottom: 4px;
  }
  .input {
    margin-bottom: 12px;
    margin-right: 8px;
  }
`

const Value = styled.span`
  font-weight: bold;
`

interface RangeInputProps {
  label: string
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
}

const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min,
  max,
  step,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  return (
    <Container>
      <label className="label">{label}</label>
      <input
        className="input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <Value>{value}</Value>
    </Container>
  )
}

export default RangeInput
