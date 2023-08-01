export const dateTitle = (startDate: string, endDate: string) => {
  return `${formatDate(new Date(startDate))} to ${formatDate(
    new Date(endDate)
  )}`;
};

export const AWSDate = (date: string) => {
  return date.split("T")[0];
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
