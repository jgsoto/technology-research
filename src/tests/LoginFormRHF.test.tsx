
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { LoginFormRHF } from "../components/organisms/LoginFormRHF/LoginFormRHF";

describe("LoginFormRHF", () => {
  // ─── Renderizado ──────────────────────────────────────────────────────
  it("renderiza los campos de email y contraseña", () => {
    render(<LoginFormRHF />);
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("renderiza el botón de submit", () => {
    render(<LoginFormRHF />);
    expect(
      screen.getByRole("button", { name: /iniciar sesión/i })
    ).toBeInTheDocument();
  });

  // ─── Validaciones ─────────────────────────────────────────────────────
  it("muestra error si se envía con campos vacíos", async () => {
    render(<LoginFormRHF />);
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    });
  });

  it("muestra error si el email es inválido", async () => {
    render(<LoginFormRHF />);
    await userEvent.type(screen.getByLabelText(/correo/i), "no-es-email");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByText(/correo inválida/i)).toBeInTheDocument();
    });
  });

  it("muestra error si la contraseña es demasiado corta", async () => {
    render(<LoginFormRHF />);
    await userEvent.type(screen.getByLabelText(/correo/i), "a@b.com");
    await userEvent.type(screen.getByLabelText(/contraseña/i), "abc");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByText(/al menos 6 caracteres/i)).toBeInTheDocument();
    });
  });

  // ─── Submit exitoso ───────────────────────────────────────────────────
  it("muestra mensaje de éxito con datos válidos", async () => {
    render(<LoginFormRHF />);
    await userEvent.type(screen.getByLabelText(/correo/i), "test@test.com");
    await userEvent.type(screen.getByLabelText(/contraseña/i), "password123");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/sesión iniciada/i);
    });
  });
});
