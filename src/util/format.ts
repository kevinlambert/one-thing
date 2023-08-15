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
