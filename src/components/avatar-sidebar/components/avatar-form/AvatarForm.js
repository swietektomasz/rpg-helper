import React from "react";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { InputField } from "src/components/shared/input-field/InputField";

import "./avatar-form.css";

const AVATAR_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Must provide a name for your character"),
  imageUrl: yup.string().required("Need an url for your avatar image")
});

export function AvatarForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", imageUrl: "" }}
      onSubmit={handleSubmit}
      validationSchema={AVATAR_VALIDATION_SCHEMA}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="avatar-form">
            <Field component={InputField} name="name" label="Name" />
            <Field component={InputField} name="imageUrl" label="Image URL" />
            <button className="avatar-form-save" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

AvatarForm.propTypes = {
  handleSubmit: PropTypes.func
};
