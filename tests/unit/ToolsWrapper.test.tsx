import { render } from "@testing-library/react";
import type * as ReactDom from "react-dom";

import { tools } from "./mocks/toolMock";

jest.mock("react-dom", () => ({
  ...jest.requireActual<typeof ReactDom>("react-dom"),
  preload: jest.fn(),
}));

jest.mock("@context/tools", () => ({
  useToolsContext: jest
    .fn()
    .mockReturnValue({
      filteredTools: tools,
      searchedName: "",
      selectedTool: tools[0],
      isModalOpen: true,
      setIsModalOpen: jest.fn(),
    })
    .mockReturnValueOnce({
      filteredTools: [],
      searchedName: "non-existent_tool_name",
      selectedTool: tools[0],
      isModalOpen: false,
      setIsModalOpen: jest.fn(),
    })
    .mockReturnValueOnce({
      filteredTools: tools,
      searchedName: "",
      selectedTool: tools[0],
      isModalOpen: false,
      setIsModalOpen: jest.fn(),
    }),
}));

import ToolsWrapper from "@components/ToolsWrapper";

describe("ToolsWrapper component", () => {
  it("should display a message indicating that the searched tool was not found", () => {
    const { getByTestId } = render(<ToolsWrapper />);

    const paragraphElement = getByTestId("tool_not_found_message");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent(/non-existent_tool_name/);
  });

  it("should display all filtered tools", () => {
    const { getAllByTestId } = render(<ToolsWrapper />);
    const toolCardList = getAllByTestId("tool_card");

    toolCardList.forEach((toolCard) => {
      expect(toolCard).toBeInTheDocument();
    });

    expect(toolCardList).toHaveLength(3);
  });

  it("should display the modal for the selected tool", () => {
    const { getByTestId } = render(<ToolsWrapper />);

    const toolModal = getByTestId("tool_modal");

    expect(toolModal).toBeInTheDocument();
  });
});
