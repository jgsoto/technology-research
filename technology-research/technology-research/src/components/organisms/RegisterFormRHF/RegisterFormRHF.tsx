import { useId, useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterData,
} from "../../../schemas/registerSchema";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

export const RegisterFormRHF = () => {
  const [success, setSuccess] = useState(false);

  const fullNameDOMRef = useRef<HTMLInputElement>(null);
  const headingId = useId();

  useEffect(() => {
    fullNameDOMRef.current?.focus();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { ref: rhfFullNameRef, ...fullNameRegister } = register("fullName");

  const onSubmit = (data: RegisterData) => {
    console.log("[RHF] Register data:", data);
    setSuccess(true);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-6">
       <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          CREATE ACCOUNT
        </h2>
        <p className="mt-1 text-sm text-slate-500 flex items-center justify-center gap-2">
          React Hook Form and Zod 
        </p>
      </div>

      <form
        aria-labelledby={headingId}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <FormField
          label="Full name"
          error={errors.fullName?.message}
          required
          inputProps={{
            ...fullNameRegister,
            type: "text",
            placeholder: "Juan Pérez",
            autoComplete: "name",
          }}
          inputRef={(node) => {
            rhfFullNameRef(node);
            (fullNameDOMRef as React.MutableRefObject<HTMLInputElement | null>).current =
              node;
          }}
        />

        <FormField
          label="Email"
          error={errors.email?.message}
          required
          inputProps={{
            ...register("email"),
            type: "email",
            placeholder: "user@email.com",
            autoComplete: "email",
          }}
        />

        <FormField
          label="Password"
          error={errors.password?.message}
          required
          inputProps={{
            ...register("password"),
            type: "password",
            placeholder: "Minimum 8 characters",
            autoComplete: "new-password",
          }}
        />

        <FormField
          label="Confirm password"
          error={errors.confirmPassword?.message}
          required
          inputProps={{
            ...register("confirmPassword"),
            type: "password",
            placeholder: "Confirm your password",
            autoComplete: "new-password",
          }}
        />

        <Button type="submit" isLoading={isSubmitting}>
          Create account
        </Button>
      </form>

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
