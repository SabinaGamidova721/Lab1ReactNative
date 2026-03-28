import "@testing-library/jest-native/extend-expect";

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  return RN;
});
