import type * as ReactDom from "react-dom";

import ToolCard from "@components/ToolCard";
import { render } from "@testing-library/react";

jest.mock("react-dom", () => ({
  ...jest.requireActual<typeof ReactDom>("react-dom"),
  preload: jest.fn(),
}));

const TOOL_MOCK = {
  app_id: "example_Tool",
  name: "Example Tool",
  color: "#3498db",
  icon: "https://www.example.com/icon-url.png",
  link: "https://www.example.com",
};

describe("ToolCard component", () => {
  it("should display an icon for the tool", () => {
    const { getByRole } = render(<ToolCard tool={TOOL_MOCK} />);

    const toolIcon = getByRole("img", { name: TOOL_MOCK.name });

    expect(toolIcon).toBeInTheDocument();
  });

  it("should display the name of the tool", () => {
    const { getByRole } = render(<ToolCard tool={TOOL_MOCK} />);

    const toolName = getByRole("heading", { level: 3 });

    expect(toolName).toBeInTheDocument();
    expect(toolName).toHaveTextContent(TOOL_MOCK.name);
  });
});
