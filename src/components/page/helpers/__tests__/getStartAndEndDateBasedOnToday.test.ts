import PeriodInterval from "../../../../util/periods/periodInterval";
import { getStartAndEndDateBasedOnToday } from "../DateHelper";

test("Get start and end date based on today - today", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const periodIncrement = 0;
  const periodInterval = PeriodInterval.day;

  const result = getStartAndEndDateBasedOnToday({
    periodInterval,
    periodIncrement,
  });

  expect(result).toStrictEqual({
    startDate: new Date("2023-10-16T00:00:00.000Z"),
    endDate: new Date("2023-10-16T00:00:00.000Z"),
  });
});

test("Get start and end date based on today - week", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const periodIncrement = 0;
  const periodInterval = PeriodInterval.week;

  const result = getStartAndEndDateBasedOnToday({
    periodInterval,
    periodIncrement,
  });

  expect(result).toStrictEqual({
    startDate: new Date("2023-10-16T00:00:00.000Z"),
    endDate: new Date("2023-10-22T00:00:00.000Z"),
  });
});

test("Get start and end date based on today - month", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const periodIncrement = 3;
  const periodInterval = PeriodInterval.month;

  const result = getStartAndEndDateBasedOnToday({
    periodInterval,
    periodIncrement,
  });

  expect(result).toStrictEqual({
    startDate: new Date("2023-10-16T00:00:00.000Z"),
    endDate: new Date("2024-01-15T00:00:00.000Z"),
  });
});
