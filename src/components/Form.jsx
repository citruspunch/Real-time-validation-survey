import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import CheckboxInput from "./inputs/CheckboxInput";
import SelectInput from "./inputs/SelectInput";
import "./styles/Form.css";

export default function Form({ onProgress, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData(name, type === "checkbox" ? checked : value);
  };

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSuccess();
      setFormData({
        name: "",
        email: "",
        age: "",
        terms: false,
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const completedFields = Object.values(formData).filter(Boolean).length;
    return (completedFields / totalFields) * 100;
  };

  React.useEffect(() => {
    onProgress(calculateProgress());
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextInput
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextInput
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextInput
        name="age"
        label="Age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />
      <SelectInput
        name="gender"
        label="Gender"
        value={formData.gender}
        onChange={handleChange}
        error={errors.gender}
        options={[
          { value: "", label: "Select your gender" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />
      <CheckboxInput
        name="terms"
        label="I accept the terms and conditions"
        checked={formData.terms}
        onChange={handleChange}
        error={errors.terms}
      />
      <button type="submit" disabled={isSubmitted}>
        Submit
      </button>
    </form>
  );
}
