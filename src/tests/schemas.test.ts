
import { describe, it, expect } from "vitest";

import { loginSchema } from "../schemas/loginSchema";
import { registerSchema } from "../schemas/registerSchema";

describe("loginSchema", () => {
  it("acepta credenciales válidas", () => {
    const result = loginSchema.safeParse({
      email: "user@test.com",
      password: "123456",
    });
    expect(result.success).toBe(true);
  });

  it("rechaza email malformado", () => {
    const result = loginSchema.safeParse({ email: "no-email", password: "123456" });
    expect(result.success).toBe(false);
  });

  it("rechaza contraseña demasiado corta", () => {
    const result = loginSchema.safeParse({ email: "a@b.com", password: "abc" });
    expect(result.success).toBe(false);
  });
});

describe("registerSchema", () => {
  const valid = {
    fullName: "Ana García",
    email: "ana@test.com",
    password: "Password1!",
    confirmPassword: "Password1!",
  };

  it("acepta datos de registro válidos", () => {
    expect(registerSchema.safeParse(valid).success).toBe(true);
  });

  it("rechaza contraseña sin mayúscula", () => {
    const r = registerSchema.safeParse({ ...valid, password: "password1!", confirmPassword: "password1!" });
    expect(r.success).toBe(false);
  });

  it("rechaza contraseña sin número", () => {
    const r = registerSchema.safeParse({ ...valid, password: "Password!", confirmPassword: "Password!" });
    expect(r.success).toBe(false);
  });

  it("rechaza contraseña sin carácter especial", () => {
    const r = registerSchema.safeParse({ ...valid, password: "Password1", confirmPassword: "Password1" });
    expect(r.success).toBe(false);
  });

  it("rechaza cuando las contraseñas no coinciden", () => {
    const r = registerSchema.safeParse({ ...valid, confirmPassword: "OtroPass1!" });
    expect(r.success).toBe(false);
    if (!r.success) {
      // Zod v4 uses .issues instead of .errors
      const paths = r.error.issues.map((e) => e.path[0]);
      expect(paths).toContain("confirmPassword");
    }
  });

  it("rechaza nombre con menos de 3 caracteres", () => {
    const r = registerSchema.safeParse({ ...valid, fullName: "Ab" });
    expect(r.success).toBe(false);
  });
});
