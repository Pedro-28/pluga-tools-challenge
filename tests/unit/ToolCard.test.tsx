import { render } from "@testing-library/react";
import type * as ReactDom from "react-dom";

import ToolCard from "@components/ToolCard";
import { tools } from "./mocks/toolMock";

jest.mock("react-dom", () => ({
  ...jest.requireActual<typeof ReactDom>("react-dom"),
  preload: jest.fn(),
}));

describe("ToolCard component", () => {
  it("should display an icon for the tool", () => {
    const { getByRole } = render(<ToolCard tool={tools[0]} />);

    const toolIcon = getByRole("img", { name: tools[0].name });

    expect(toolIcon).toBeInTheDocument();
  });

  it("should display the name of the tool", () => {
    const { getByRole } = render(<ToolCard tool={tools[0]} />);

    const toolName = getByRole("heading", { level: 3 });

    expect(toolName).toBeInTheDocument();
    expect(toolName).toHaveTextContent(tools[0].name);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
