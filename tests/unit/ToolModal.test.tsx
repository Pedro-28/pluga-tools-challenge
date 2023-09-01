import { render, screen } from "@testing-library/react";
import type * as ReactDom from "react-dom";

import ToolModal from "@components/ToolModal";
import { tools } from "./mocks/toolMock";

jest.mock("react-dom", () => ({
  ...jest.requireActual<typeof ReactDom>("react-dom"),
  preload: jest.fn(),
}));

jest.mock("@context/tools", () => ({
  useToolsContext: jest.fn(() => ({
    selectedTool: tools[0],
    isModalOpen: true,
    setIsModalOpen: jest.fn(),
  })),
}));

jest.spyOn(Storage.prototype, "getItem");
Storage.prototype.getItem = jest.fn((_: string) =>
  JSON.stringify([tools[1], tools[2]])
);

describe("ToolModal component", () => {
  beforeEach(() => {
    render(<ToolModal />);
  });

  it("should display an icon for the tool", () => {
    const toolIcon = screen.getByRole("img", { name: tools[0].name });

    expect(toolIcon).toBeInTheDocument();
  });

  it("should display the name of the tool", () => {
    const toolName = screen.getByRole("heading", { name: tools[0].name });

    expect(toolName).toBeInTheDocument();
  });

  it("should display the link to the tool's website", () => {
    const toolWebsite = screen.getByRole("link");

    expect(toolWebsite).toBeInTheDocument();
    expect(toolWebsite).toHaveTextContent("Acessar");
    expect(toolWebsite).toHaveAttribute("href", tools[0].link);
  });

  it("should contain a 'Last Visualized Tools' section with a title and display tools within it", () => {
    const lastVisualizedToolsTitle = screen.getByRole("heading", {
      name: "Últimas ferramentas visualizadas",
    });

    expect(lastVisualizedToolsTitle).toBeInTheDocument();

    const lastVisualizedTools = screen.getAllByTestId("tool_card");

    lastVisualizedTools.forEach((lastVisualizedTool) => {
      expect(lastVisualizedTool).toBeInTheDocument();
    });

    expect(lastVisualizedTools).toHaveLength(2);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
