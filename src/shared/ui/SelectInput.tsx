import React from "react"

interface SelectInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  label: string
  error?: string
  options: { value: string; label: string }[]
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  options,
}) => (
  <div>
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
  </div>
)

export default SelectInput
