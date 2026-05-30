
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { Button } from "../components/atoms/Button/Button";
import { Input } from "../components/atoms/Input/Input";
import { Label } from "../components/atoms/Label/Label";
import { ErrorMessage } from "../components/atoms/ErrorMessage/ErrorMessage";

// ─── Button ───────────────────────────────────────────────────────────────
describe("Button", () => {
  it("renderiza el texto de sus hijos", () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });

  it("muestra spinner cuando isLoading=true", () => {
    render(<Button isLoading>Enviar</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByText(/cargando/i)).toBeInTheDocument();
  });

  it("se deshabilita cuando disabled=true", () => {
    render(<Button disabled>Enviar</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("dispara onClick al hacer clic", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });
});

// ─── Input ────────────────────────────────────────────────────────────────
describe("Input", () => {
  it("renderiza un input de texto", () => {
    render(<Input placeholder="Escribe aquí" />);
    expect(screen.getByPlaceholderText("Escribe aquí")).toBeInTheDocument();
  });

  it("aplica clases de error cuando hasError=true", () => {
    render(<Input hasError data-testid="input" />);
    expect(screen.getByTestId("input")).toHaveClass("border-red-400");
  });

  it("acepta escritura del usuario", async () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    await userEvent.type(input, "hola");
    expect(input.value).toBe("hola");
  });
});

// ─── Label ────────────────────────────────────────────────────────────────
describe("Label", () => {
  it("renderiza el texto del label", () => {
    render(<Label>Correo</Label>);
    expect(screen.getByText("Correo")).toBeInTheDocument();
  });

  it("muestra indicador * cuando required=true", () => {
    render(<Label required>Campo</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("NO muestra * sin la prop required", () => {
    render(<Label>Campo</Label>);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("acepta htmlFor para asociar con input", () => {
    render(<Label htmlFor="mi-input">Email</Label>);
    expect(screen.getByText("Email").closest("label")).toHaveAttribute(
      "for",
      "mi-input"
    );
  });
});

// ─── ErrorMessage ─────────────────────────────────────────────────────────
describe("ErrorMessage", () => {
  it("muestra el mensaje de error", () => {
    render(<ErrorMessage message="Campo requerido" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Campo requerido");
  });

  it("no renderiza nada sin message", () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toBeEmptyDOMElement();
  });
});
