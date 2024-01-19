import { dateTitle, weekDateRange, monthDateRange } from "../../../util/format";
import PeriodInterval from "../../../util/periods/periodInterval";

type StartEndProps = {
  periodInterval: PeriodInterval;
  periodIncrement: number;
};

export const getStartAndEndDateBasedOnToday = ({
  periodInterval,
  periodIncrement,
}: StartEndProps) => {
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

type FormatDateTitleProps = {
  thingPeriod: {
    startDate: string | null | undefined;
    endDate: string | null | undefined;
  };
  periodInterval: PeriodInterval;
  periodIncrement: number;
};

export const formatDateTitle = ({
  thingPeriod,
  periodInterval,
  periodIncrement,
}: FormatDateTitleProps) => {
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
