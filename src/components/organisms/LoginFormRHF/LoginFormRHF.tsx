import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginData } from "../../../schemas/loginSchema";
import { FormField } from "../../molecules/FormField/FormField";
import { Button } from "../../atoms/Button/Button";

export const LoginFormRHF = () => {
  const [success, setSuccess] = useState(false);

  const emailDOMRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailDOMRef.current?.focus();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { ref: rhfEmailRef, ...emailRegister } = register("email");

  const onSubmit = (data: LoginData) => {
    console.log("[RHF] Login data:", data);
    setSuccess(true);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          Login
        </h2>
        <p className="mt-1 text-sm text-slate-500 flex items-center justify-center gap-2">
          React Hook Form and Zod 
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        {/* useRef merged with RHF ref via callback ref pattern */}
        <FormField
          label="Email"
          error={errors.email?.message}
          required
          inputProps={{
            ...emailRegister,
            type: "email",
            placeholder: "user@email.com",
            autoComplete: "email",
          }}
          inputRef={(node) => {
            // Merge: assign to RHF and to our useRef simultaneously
            rhfEmailRef(node);
            (emailDOMRef as React.MutableRefObject<HTMLInputElement | null>).current =
              node;
          }}
        />

        <FormField
          label="Password"
          error={errors.password?.message}
          required
          inputProps={{
            ...register("password"),
            type: "password",
            placeholder: "••••••••",
            autoComplete: "current-password",
          }}
        />

        <Button type="submit" isLoading={isSubmitting}>
          Login
        </Button>
      </form>

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
