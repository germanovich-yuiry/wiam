import React from "react"

interface TextInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: string
  type?: string
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  type = "text",
}) => (
  <div>
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
  </div>
)

export default TextInput
