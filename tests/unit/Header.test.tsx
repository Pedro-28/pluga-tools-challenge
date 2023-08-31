import Header from "@components/Header";
import { render } from "@testing-library/react";

describe("Header component", () => {
  it("should display the Pluga link/logo", () => {
    const { getByRole } = render(<Header />);

    const linkPluga = getByRole("link");

    expect(linkPluga).toBeInTheDocument();
    expect(linkPluga).toHaveAttribute("href", "https://pluga.co/");

    const logoPluga = getByRole("img", { name: "Logo da Pluga" });

    expect(logoPluga).toBeInTheDocument();
  });

  it("should display an input field", () => {
    const { getByRole } = render(<Header />);

    const inputElement = getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "Buscar ferramentas");
  });
});
