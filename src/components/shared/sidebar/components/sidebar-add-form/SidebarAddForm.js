import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import { InputField } from "shared/input-field";

import "./sidebar-add-form.css";

const AVATAR_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Must provide a name"),
  imageUrl: yup.string().required("Need an url for the image"),
});

export function SidebarAddForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", imageUrl: "" }}
      onSubmit={handleSubmit}
      validationSchema={AVATAR_VALIDATION_SCHEMA}
    >
      <Form>
        <div className="sidebar-form">
          <Field component={InputField} name="name" label="Name" />
          <Field component={InputField} name="imageUrl" label="Image URL" />
          <button className="sidebar-form-save" type="submit">
            Save
          </button>
        </div>
      </Form>
    </Formik>
  );
}

SidebarAddForm.propTypes = {
  handleSubmit: PropTypes.func,
};
