import React, { createContext, useContext, useState, FC } from "react"
import { IFormData } from "../types/FormData.type"

import { IFormContext } from "../types/FormContext.type"

const FormContext = createContext<IFormContext | undefined>(undefined)

export const FormProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<IFormData>({
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    workPlace: "",
    address: "",
    loanAmount: 200,
    loanTerm: 10,
  })

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider")
  }
  return context
}
