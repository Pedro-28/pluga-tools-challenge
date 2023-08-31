import Button from "@components/Button";
import { render } from "@testing-library/react";

describe("Button component", () => {
  it("should display a 'Save' button", () => {
    const { getByRole } = render(<Button>Save</Button>);

    const buttonElement = getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe("Save");
  });
});
