import { useEffect, useRef, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema, type ProfileData } from "../../../schemas/profileSchema";
import { FormField } from "../../molecules/FormField/FormField";
import { TextareaField } from "../../molecules/TextareaField/TextareaField";
import { Button } from "../../atoms/Button/Button";

const DEFAULT_PROFILE: ProfileData = {
  fullName: "Ana García",
  email: "ana.garcia@email.com",
  bio: "Frontend developer passionate about React and UX.",
  website: "https://anagarcia.dev",
};

export const ProfileForm = () => {
  const [saved, setSaved] = useState(false);
  const fullNameDOMRef = useRef<HTMLInputElement>(null);
  const headingId = useId();

  useEffect(() => {
    fullNameDOMRef.current?.focus();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: DEFAULT_PROFILE,
  });

  const { ref: rhfFullNameRef, ...fullNameRegister } = register("fullName");

  const onSubmit = (data: ProfileData) => {
    console.log("[Profile] Saved:", data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 id={headingId} className="text-2xl font-bold text-slate-800">
            User profile
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Edit your personal information
          </p>
        </div>

        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
          AG
        </div>
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
            autoComplete: "email",
          }}
        />

        <TextareaField
          label="Biography"
          error={errors.bio?.message}
          textareaProps={{
            ...register("bio"),
            placeholder: "Tell us something about you (max. 200 characters)",
          }}
        />

        <FormField
          label="Website"
          error={errors.website?.message}
          inputProps={{
            ...register("website"),
            type: "url",
            placeholder: "https://yourwebsite.com",
            autoComplete: "url",
          }}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => reset()}
            disabled={!isDirty}
            className="flex-1"
          >
            Discard changes
          </Button>

          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={!isDirty}
            className="flex-1"
          >
            Save profile
          </Button>
        </div>
      </form>

      {saved && (
        <p
          role="status"
          className="mt-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-700"
        >
          ✓ Profile updated successfully
        </p>
      )}
    </div>
  );
};
