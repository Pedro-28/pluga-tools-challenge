import PaginationControls from "@components/PaginationControls";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn((param: string) => {
      if (param === "page") {
        return "1";
      }
    }),
  })),
}));

jest.mock("@context/tools", () => ({
  useToolsContext: jest.fn(() => ({
    hasPrevPage: false,
    hasNextPage: true,
    totalTools: 66,
  })),
}));

describe("PaginationControls component", () => {
  beforeEach;
  it("should display all pagination buttons", () => {
    const { getAllByRole } = render(<PaginationControls />);

    const buttonElementList = getAllByRole("button");

    buttonElementList.forEach((buttonElement) => {
      expect(buttonElement).toBeInTheDocument();
    });

    expect(buttonElementList).toHaveLength(8);
  });

  it("should display a disabled 'Previous' button when on the first page", () => {
    const { getAllByRole } = render(<PaginationControls />);

    const buttonElementList = getAllByRole("button");

    expect(buttonElementList[0]).toBeDisabled();
  });
});
