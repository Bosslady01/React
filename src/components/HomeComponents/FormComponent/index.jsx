import styles from "./formComponent.module.css";
import clsx from "clsx";
import TextField from "../../Inputs/TextField";
import Button from "../../Button";
import { useState } from "react";
import TextArea from "../../Inputs/TextArea";
import * as yup from "yup";
import { Formik } from "formik";
import { createInquiry } from "../../../apiRequests/inquiry";

const FormComponent = ({ fatimah }) => {
  return (
    <div className={clsx(styles.wrapper, fatimah)}>
      <div>
        <h3 className={styles.heading}>
          An easy way to send requests to all suppliers
        </h3>
        <p className={styles.lead}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      <div className={styles.formWrapper}>
        <Form />
      </div>
    </div>
  );
};

export const Form = () => {

  const onSubmtHandler = async(values) => {
      await createInquiry(values)
  }

  return (
    <Formik initialValues={defaultValues}
    validationSchema={formSchema}
    onSubmit={onSubmtHandler}
    >
{
  ({
    values,
    handleChange,
    errors,
    handleSubmit,
  }) => {
    return     <form onSubmit={handleSubmit} className={styles.form}>
    <TextField
      value={values.item}
      name="item"
      onChangeHandler={handleChange}
      id="item"
      placeholder="what item you need?"
      error={errors.item}
    />
    <TextArea onChangeHandler={handleChange} name="description" value={values.description} />
    <div className={styles.btnWrapper}>
      <Button type="submit">Send Inquiry</Button>
    </div>
  </form>
  }
}

    </Formik>

  );
};

const defaultValues = {
  item: "",
  description: "",
}

const formSchema = yup.object({
  item: yup.string().required().min(5),
  description: yup.string().required(),
})
export default FormComponent;
