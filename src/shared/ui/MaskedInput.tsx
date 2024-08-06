import React from "react"
import InputMask from "react-input-mask"

interface MaskedInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: string
  mask: string
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  name,
  value,
  onChange,
  label,
  error,
  mask,
}) => (
  <div>
    <label className="label">{label}</label>
    <InputMask
      className="input"
      mask={mask}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
    {error && <span>{error}</span>}
  </div>
)

export default MaskedInput
