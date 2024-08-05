import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    workPlace: "",
    address: "",
    loanAmount: 200,
    loanTerm: 10,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
