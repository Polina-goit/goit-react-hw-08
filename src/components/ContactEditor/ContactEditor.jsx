import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./ContactEditor.module.css";

const ContactEditor = ({ updateContact, setVisible, contact }) => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [errors, setErrors] = useState({ name: "", number: "" });

  useEffect(() => {
    if (contact) {
      setFormData({ name: contact.name, number: contact.number });
    }
  }, [contact]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "number" && !/^\d{3}-\d{3}-\d{4}$/.test(value)) {
      setErrors({ ...errors, number: "Invalid phone number format" });
    } else {
      setErrors({ ...errors, number: "" });
    }
  };

  const handleUpdateClick = () => {
    updateContact({ id: contact.id, ...formData });
    setVisible(false);
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return (
    <>
      <div className={css.thumbInputEdit}>
        <TextField
          className={css.input}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          error={!!errors.number}
          helperText={errors.number}
        />
      </div>
      <div className={css.thumbBtnEdit}>
        <button
          className={css.btnActionEdit}
          type="button"
          onClick={handleUpdateClick}
          disabled={!isFormValid()}
        >
          Update
        </button>
        <button
          className={css.btnActionEdit}
          type="button"
          onClick={() => setVisible(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ContactEditor;
