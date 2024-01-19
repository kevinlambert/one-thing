import PeriodInterval from "../../../../util/periods/periodInterval";

import { formatDateTitle } from "../DateHelper";

test("Format Date Title - Today", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const thingPeriod = { startDate: null, endDate: null };

  const periodInterval = PeriodInterval.day;
  const periodIncrement = 0;

  const result = formatDateTitle({
    thingPeriod,
    periodInterval,
    periodIncrement,
  });

  expect(result).toBe("Monday, Oct 16, 2023");
});

test("Format Date Title - Week", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const thingPeriod = { startDate: null, endDate: null };

  const periodInterval = PeriodInterval.week;
  const periodIncrement = 0;

  const result = formatDateTitle({
    thingPeriod,
    periodInterval,
    periodIncrement,
  });

  expect(result).toBe("Monday, Oct 16, 2023 to Sunday, Oct 22, 2023");
});

test("Format Date Title - Week with existing thing period", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const thingPeriod = {
    startDate: new Date("2023-09-11").toISOString(),
    endDate: new Date("2023-09-17").toISOString(),
  };

  const periodInterval = PeriodInterval.week;
  const periodIncrement = 0;

  const result = formatDateTitle({
    thingPeriod,
    periodInterval,
    periodIncrement,
  });

  expect(result).toBe("Monday, Sep 11, 2023 to Sunday, Sep 17, 2023");
});

test("Format Date Title - month", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-10-16"));

  const thingPeriod = { startDate: null, endDate: null };

  const periodInterval = PeriodInterval.month;
  const periodIncrement = 3;

  const result = formatDateTitle({
    thingPeriod,
    periodInterval,
    periodIncrement,
  });

  expect(result).toBe("Monday, Oct 16, 2023 to Monday, Jan 15, 2024");
});
