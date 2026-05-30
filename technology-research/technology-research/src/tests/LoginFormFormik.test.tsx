
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { LoginFormFormik } from "../components/organisms/LoginFormFormik/LoginFormFormik";

describe("LoginFormFormik", () => {
  it("renderiza los campos de email y contraseña", () => {
    render(<LoginFormFormik />);
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("muestra error si el email es inválido al enviar", async () => {
    render(<LoginFormFormik />);
    await userEvent.type(screen.getByLabelText(/correo/i), "invalido");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByText(/correo inválida/i)).toBeInTheDocument();
    });
  });

  it("envío exitoso muestra mensaje de confirmación", async () => {
    render(<LoginFormFormik />);
    await userEvent.type(screen.getByLabelText(/correo/i), "user@test.com");
    await userEvent.type(screen.getByLabelText(/contraseña/i), "password123");
    await userEvent.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/sesión iniciada/i);
    });
  });
});
