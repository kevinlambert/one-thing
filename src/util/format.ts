type dateTitleProps = {
  periodInterval: string;
  periodIncrement: number;
  startDate: string;
  endDate: string;
};

export const dateTitle = ({
  periodInterval,
  periodIncrement,
  startDate,
  endDate,
}: dateTitleProps) => {
  return periodInterval === "day" && periodIncrement === 0
    ? formatDate(new Date(startDate))
    : `${formatDate(new Date(startDate))} to ${formatDate(new Date(endDate))}`;
};

export const weekDateRange = (date: Date) => {
  const startOfWeek = 0; //sunday
  // const endOfWeek = 6; //saturday
  const numberOfDaysInWeek = 6; // 0 to 6

  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay();

  const daysToSubtract = dayOfWeek - startOfWeek;

  const startOfWeekDate = new Date(currentDate);
  startOfWeekDate.setDate(currentDate.getDate() - daysToSubtract);

  const endOfWeekDate = new Date(currentDate);
  endOfWeekDate.setDate(startOfWeekDate.getDate() + numberOfDaysInWeek);

  return {
    startOfWeekDate,
    endOfWeekDate,
  };
};

export const monthDateRange = (date: Date, periodIncrement: number) => {
  const startOfMonth = 1;

  const currentDate = new Date(date);

  const startOfMonthRange = new Date(currentDate);
  startOfMonthRange.setDate(startOfMonth);

  const endOfMonthRange = new Date(currentDate);
  endOfMonthRange.setMonth(endOfMonthRange.getMonth() + periodIncrement);
  endOfMonthRange.setDate(0); // 0 will get the last day of the previous month

  return {
    startOfMonthRange,
    endOfMonthRange,
  };
};

export const AWSDate = (date: Date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const thingPeriodTitle = (
  periodInterval: string | undefined,
  periodIncrement: number | undefined
) => {
  return periodIncrement && periodIncrement >= 1
    ? `${periodIncrement} ${periodInterval}s`
    : periodInterval === "day"
    ? "Today"
    : `This ${periodInterval}`;
};
