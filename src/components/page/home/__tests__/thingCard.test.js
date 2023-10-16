import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import ThingCard from "../ThingCard";

const TITLE = "TITLE";
const CONTENT = "CONTENT";
const IS_LINKED = true;
const TODO_PATH = "TODO_PATH";

it("renders the content", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <ThingCard
        periodTitle={TITLE}
        thingContent={CONTENT}
        isLinked={IS_LINKED}
        toDoPath={TODO_PATH}
      />
    </MemoryRouter>,
    div
  );

  expect(screen.getByText(TITLE)).toBeInTheDocument();
  expect(screen.getByText(CONTENT)).toBeInTheDocument();
});

it("renders the set thing button", () => {
  const div = document.createElement("div");
  render(
    <MemoryRouter>
      <ThingCard toDoPath={TODO_PATH} />
    </MemoryRouter>,
    div
  );

  expect(screen.getByText("Set your ONE Thing")).toBeInTheDocument();
});

it("snapshot - not linked", () => {
  const div = document.createElement("div");
  const tree = renderer
    .create(
      <MemoryRouter>
        <ThingCard
          periodTitle={TITLE}
          thingContent={CONTENT}
          toDoPath={TODO_PATH}
        />
      </MemoryRouter>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("snapshot - linked", () => {
  const div = document.createElement("div");
  const tree = renderer
    .create(
      <MemoryRouter>
        <ThingCard
          periodTitle={TITLE}
          thingContent={CONTENT}
          isLinked={true}
          toDoPath={TODO_PATH}
        />
      </MemoryRouter>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("snapshot - linked icon", () => {
  const div = document.createElement("div");
  const tree = renderer
    .create(
      <MemoryRouter>
        <ThingCard
          periodTitle={TITLE}
          thingContent={CONTENT}
          isLinkedIcon
          showLink
          toDoPath={TODO_PATH}
        />
      </MemoryRouter>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("snapshot - rounded corners top", () => {
  const div = document.createElement("div");
  const tree = renderer
    .create(
      <MemoryRouter>
        <ThingCard borderTopRound />
      </MemoryRouter>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("snapshot - rounded corners bottom", () => {
  const div = document.createElement("div");
  const tree = renderer
    .create(
      <MemoryRouter>
        <ThingCard borderBottomRound />
      </MemoryRouter>,
      div
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
