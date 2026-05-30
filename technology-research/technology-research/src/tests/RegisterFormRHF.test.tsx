
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { RegisterFormRHF } from "../components/organisms/RegisterFormRHF/RegisterFormRHF";

describe("RegisterFormRHF", () => {
  // ─── Renderizado ──────────────────────────────────────────────────────
  it("renderiza los 4 campos del formulario", () => {
    render(<RegisterFormRHF />);
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    // Hay dos campos de tipo contraseña
    expect(screen.getAllByLabelText(/contraseña/i).length).toBe(2);
  });

  // ─── Validaciones ─────────────────────────────────────────────────────
  it("muestra errores al enviar formulario vacío", async () => {
    render(<RegisterFormRHF />);
    await userEvent.click(screen.getByRole("button", { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    });
  });

  it("muestra error si la contraseña no tiene mayúsculas", async () => {
    render(<RegisterFormRHF />);
    await userEvent.type(screen.getByLabelText(/nombre completo/i), "Ana García");
    await userEvent.type(screen.getByLabelText(/correo/i), "ana@test.com");
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[0],
      "sinmayusculas1!"
    );
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[1],
      "sinmayusculas1!"
    );
    await userEvent.click(screen.getByRole("button", { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(screen.getByText(/mayúscula/i)).toBeInTheDocument();
    });
  });

  it("muestra error si las contraseñas no coinciden", async () => {
    render(<RegisterFormRHF />);
    await userEvent.type(screen.getByLabelText(/nombre completo/i), "Ana García");
    await userEvent.type(screen.getByLabelText(/correo/i), "ana@test.com");
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[0],
      "Password1!"
    );
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[1],
      "Diferente1!"
    );
    await userEvent.click(screen.getByRole("button", { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(screen.getByText(/no coinciden/i)).toBeInTheDocument();
    });
  });

  // ─── Submit exitoso ───────────────────────────────────────────────────
  it("muestra mensaje de éxito con datos válidos", async () => {
    render(<RegisterFormRHF />);
    await userEvent.type(screen.getByLabelText(/nombre completo/i), "Ana García");
    await userEvent.type(screen.getByLabelText(/correo/i), "ana@test.com");
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[0],
      "Password1!"
    );
    await userEvent.type(
      screen.getAllByLabelText(/contraseña/i)[1],
      "Password1!"
    );
    await userEvent.click(screen.getByRole("button", { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/cuenta creada/i);
    });
  });
});
