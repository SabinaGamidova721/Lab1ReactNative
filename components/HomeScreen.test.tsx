import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  it("renders title, priority and button", () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText("Learn mobile development")).toBeTruthy();
    expect(getByText(/Priority/i)).toBeTruthy();
    expect(getByText("Mark as done")).toBeTruthy();
  });

  it("initial state is not done", () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText(/Not done/)).toBeTruthy();
    expect(getByText("🔴")).toBeTruthy();
  });

  it("toggles task status on button press", () => {
    const { getByText } = render(<HomeScreen />);

    fireEvent.press(getByText("Mark as done"));

    expect(getByText(/Done/)).toBeTruthy();
    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("✅")).toBeTruthy();
  });

  it("toggles back to not done", () => {
    const { getByText } = render(<HomeScreen />);

    fireEvent.press(getByText("Mark as done"));
    fireEvent.press(getByText("Cancel"));

    expect(getByText(/Not done/)).toBeTruthy();
    expect(getByText("🔴")).toBeTruthy();
  });

  it("increments counter on every press", () => {
    const { getByText } = render(<HomeScreen />);

    fireEvent.press(getByText("Mark as done"));
    fireEvent.press(getByText("Cancel"));
    fireEvent.press(getByText("Mark as done"));

    expect(getByText(/Clicked 3/)).toBeTruthy();
  });

  it("changes priority when pressing buttons", () => {
    const { getAllByText } = render(<HomeScreen />);

    fireEvent.press(getAllByText("Low")[0]);
    fireEvent.press(getAllByText("Middle")[0]);
    fireEvent.press(getAllByText("High")[0]);

    expect(getAllByText("High").length).toBeGreaterThan(0);
  });
});
