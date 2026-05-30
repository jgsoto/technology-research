import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { FormField } from "../components/molecules/FormField/FormField";

describe("FormField", () => {
  it("renderiza un label y un input", () => {
    render(<FormField label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("el label apunta al input mediante htmlFor/id (useId)", () => {
    render(<FormField label="Email" />);
    const label = screen.getByText("Email");
    const input = screen.getByRole("textbox");
    // htmlFor debe coincidir con el id del input
    expect(label.getAttribute("for")).toBe(input.getAttribute("id"));
  });

  it("muestra el mensaje de error cuando se pasa error", () => {
    render(<FormField label="Email" error="Campo requerido" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Campo requerido");
  });

  it("el input tiene aria-invalid=true cuando hay error", () => {
    render(<FormField label="Email" error="Error" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("no muestra error cuando no se pasa la prop", () => {
    render(<FormField label="Email" />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("muestra * cuando required=true", () => {
    render(<FormField label="Email" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
