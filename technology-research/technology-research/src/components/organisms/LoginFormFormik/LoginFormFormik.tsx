import { useId, useRef, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { loginSchema, type LoginData } from "../../../schemas/loginSchema";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

export const LoginFormFormik = () => {
  const [success, setSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  const headingId = useId();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const initialValues: LoginData = { email: "", password: "" };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-6">
        <h2 id={headingId} className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          LOGIN
        </h2>
        <p className="mt-1 text-sm text-slate-500 flex items-center justify-center gap-2">
          Validation with<code>zod-formik-adapter</code>
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(loginSchema)}
        onSubmit={(values, { setSubmitting }) => {
          console.log("[Formik] Login data:", values);
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
              label="Email"
              error={touched.email ? errors.email : undefined}
              required
              inputRef={emailRef}
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
                placeholder: "••••••••",
                autoComplete: "current-password",
              }}
            />

            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>

      {success && (
        <p
          role="status"
          className="mt-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-700"
        >
          ✓ Login successful
        </p>
      )}
    </div>
  );
};
