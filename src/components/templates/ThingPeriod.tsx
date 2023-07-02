import * as React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingDisplay from "../ui/ThingDisplay";
import ThingEdit from "../ui/ThingEdit";
import IconButton from "../ui/IconButton";
import { ReactComponent as IconMore } from "@material-design-icons/svg/outlined/more_vert.svg";
import "./_thing-period.scss";

type Props = {
  title: string;
  date: Date;
  thingContent: string;
  isEdit?: boolean;
};

export default ({ title, date, thingContent, isEdit }: Props) => (
  <>
    <div className="thing-period-header">
      <ThingHeader
        Title={title}
        DisplayDate={date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      ></ThingHeader>
      <IconButton
        icon={<IconMore></IconMore>}
        label="Options"
        isUnderline={true}
      ></IconButton>
    </div>
    <div className="margin-bottom-16"></div>
    {isEdit ? (
      <ThingEdit
        content={thingContent}
        onSave={() => {}}
        onCancel={() => {}}
      ></ThingEdit>
    ) : (
      <ThingDisplay content={thingContent}></ThingDisplay>
    )}
  </>
);
