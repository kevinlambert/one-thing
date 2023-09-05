import { dateTitle, weekDateRange, monthDateRange } from "../../util/format";

export const getStartAndEndDateBasedOnToday = ({
  periodInterval,
  periodIncrement,
}) => {
  if (periodInterval === "week" && periodIncrement === 0) {
    const { startOfWeekDate, endOfWeekDate } = weekDateRange(new Date());
    return {
      startDate: startOfWeekDate,
      endDate: endOfWeekDate,
    };
  } else if (periodInterval === "month") {
    const { startOfMonthRange, endOfMonthRange } = monthDateRange(
      new Date(),
      periodIncrement
    );
    return {
      startDate: startOfMonthRange,
      endDate: endOfMonthRange,
    };
  } else {
    return {
      startDate: new Date(),
      endDate: new Date(),
    };
  }
};

export const formatDateTitle = ({
  thingPeriod,
  periodInterval,
  periodIncrement,
}) => {
  const startEndDates = getStartAndEndDateBasedOnToday({
    periodInterval,
    periodIncrement,
  });

  const startDate =
    thingPeriod.startDate || startEndDates.startDate.toISOString();
  const endDate = thingPeriod.endDate || startEndDates.endDate.toISOString();

  return dateTitle({
    periodInterval,
    periodIncrement,
    startDate,
    endDate,
  });
};
