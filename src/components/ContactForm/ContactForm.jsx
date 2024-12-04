import React from "react";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
// import { initialValues } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Enter your name!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Enter your email!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactFormContainer}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.formInput}
          type="text"
          name="name"
          id={nameId}
          placeholder="Name"
        ></Field>
        <ErrorMessage
          className={css.ErrorMessage}
          name="name"
          component="span"
        />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.formInput}
          type="text"
          name="number"
          id={numberId}
          placeholder="xxx-xx-xx"
        ></Field>
        <ErrorMessage
          className={css.ErrorMessage}
          name="number"
          component="span"
        />
        <button className={css.button} type="submit">
          {" "}
          Add contact{" "}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
