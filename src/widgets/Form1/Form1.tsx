import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const Form1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.phone) newErrors.phone = "Телефон обязателен.";
    if (!formData.firstName) newErrors.firstName = "Имя обязательно.";
    if (!formData.lastName) newErrors.lastName = "Фамилия обязательна.";
    if (!formData.gender) newErrors.gender = "Пол обязателен.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/form2");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Телефон</label>
        <InputMask
          mask="8 999 999 9999"
          name="phone"
          onChange={handleChange}
          required
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>Имя</label>
        <input type="text" name="firstName" onChange={handleChange} required />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Фамилия</label>
        <input type="text" name="lastName" onChange={handleChange} required />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Пол</label>
        <select name="gender" onChange={handleChange} required>
          <option>Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <button type="submit">Далее</button>
    </form>
  );
};

export default Form1;
