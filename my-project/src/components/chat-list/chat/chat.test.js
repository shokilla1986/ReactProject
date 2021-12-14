import { Chat } from "./chat";
import { renderWithRedux } from "../../../utils/render-with-redux";

const state = {
  messages: {
    messages: {
      room1: [{ id: 1, author: "User", message: "test" }],
    },
  },
};

describe("Chat component", () => {
  it("should render Chat with title prop", () => {
    const { container } = renderWithRedux(<Chat title={"room1"} />, state);

    const nodes = [...container.querySelectorAll(".text")];

    expect(nodes[0]).toHaveTextContent("room1");
    expect(nodes[1]).toHaveTextContent("test");
  });

  it("should render Chat with selected prop", () => {
    const { getByRole } = renderWithRedux(<Chat title={"room1"} />, state);

    expect(getByRole("button")).toHaveClass("selected");
  });
});
