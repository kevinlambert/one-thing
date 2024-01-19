import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ViewThing from "../ViewThing";
import { Provider as ReduxProvider } from "react-redux";
import * as reactRedux from "react-redux";
import store from "../../../../data/store";
import { routePaths } from "../../../../AppRoutes";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test("snapshot", () => {
  const mockStore = {
    thing: [
      {
        id: "6ec8f754-7787-48b1-a934-36819f3307f6",
        text: "doing one thing",
        periodInterval: "day",
        periodIncrement: 0,
        startDate: "2023-10-16",
        endDate: "2023-10-16",
        isRelatedTo: ["WEEK0"],
        isDone: 0,
        sphereID: "8c404182-0b8d-4e8d-ab2d-1c17de42fb7d",
        accountID: "1f2091ec-a047-463b-8251-1a5b2d1f5f63",
        createdAt: "2023-10-16T10:43:59.023Z",
        updatedAt: "2023-10-16T10:46:01.166Z",
        owner: null,
        _version: 4,
        _lastChangedAt: 1697453161214,
        _deleted: null,
      },
    ],
  };

  const useSelectorMock = reactRedux.useSelector;
  useSelectorMock.mockImplementation((selector) => selector(mockStore));

  const div = document.createElement("div");
  const tree = renderer
    .create(
      <ReduxProvider store={store}>
        <MemoryRouter initialEntries={["/thing/day/0"]}>
          <Routes>
            <Route path={routePaths.THING.VIEW} element={<ViewThing />} />
          </Routes>
        </MemoryRouter>
      </ReduxProvider>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
