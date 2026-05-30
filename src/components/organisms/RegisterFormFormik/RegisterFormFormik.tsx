import { useId, useRef, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import {
  registerSchema,
  type RegisterData,
} from "../../../schemas/registerSchema";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

export const RegisterFormFormik = () => {
  const [success, setSuccess] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const headingId = useId();

  useEffect(() => {
    fullNameRef.current?.focus();
  }, []);

  const initialValues: RegisterData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-6">
        <h2 id={headingId} className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          CREATE ACCOUNT
        </h2>
        <p className="mt-1 text-sm text-slate-500 flex items-center justify-center gap-2">
          Validation with<code>zod-formik-adapter</code>
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(registerSchema)}
        onSubmit={(values, { setSubmitting }) => {
          console.log("[Formik] Register data:", values);
          setSuccess(true);
          setSubmitting(false);
        }}
      >
        {({ getFieldProps, errors, touched, isSubmitting }) => (
          <Form
            aria-labelledby={headingId}
            className="flex flex-col gap-5"
            noValidate
          >
            <FormField
              label="Full name"
              error={touched.fullName ? errors.fullName : undefined}
              required
              inputRef={fullNameRef}
              inputProps={{
                ...getFieldProps("fullName"),
                type: "text",
                placeholder: "Juan Pérez",
                autoComplete: "name",
              }}
            />

            <FormField
              label="Email"
              error={touched.email ? errors.email : undefined}
              required
              inputProps={{
                ...getFieldProps("email"),
                type: "email",
                placeholder: "user@email.com",
                autoComplete: "email",
              }}
            />

            <FormField
              label="Password"
              error={touched.password ? errors.password : undefined}
              required
              inputProps={{
                ...getFieldProps("password"),
                type: "password",
                placeholder: "Minimum 8 characters",
                autoComplete: "new-password",
              }}
            />

            <FormField
              label="Confirm password"
              error={touched.confirmPassword ? errors.confirmPassword : undefined}
              required
              inputProps={{
                ...getFieldProps("confirmPassword"),
                type: "password",
                placeholder: "Confirm your password",
                autoComplete: "new-password",
              }}
            />

            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              Create account
            </Button>
          </Form>
        )}
      </Formik>

      {success && (
        <p
          role="status"
          className="mt-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-700"
        >
          ✓ Account created successfully
        </p>
      )}
    </div>
  );
};
