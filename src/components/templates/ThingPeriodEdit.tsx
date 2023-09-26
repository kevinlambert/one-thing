import React from "react";
import ThingHeader from "../ui/ThingHeader";
import ThingEdit from "../ui/editThing/ThingEdit";
import "./_thing-period.scss";

type Props = {
  title: string;
  date: string;
  thingContent: string | null | undefined;
  relatedTo: string;
  onSave: any;
  onCancel: any;
};

export default ({
  title,
  date,
  thingContent,
  relatedTo,
  onSave,
  onCancel,
}: Props) => {
  return (
    <>
      <div className="thing-period-header">
        <ThingHeader Title={title} DisplayDate={date}></ThingHeader>
      </div>
      <div className="margin-bottom-16"></div>
      <ThingEdit
        content={thingContent || ""}
        relatedTo={relatedTo}
        onSave={onSave}
        onCancel={onCancel}
      ></ThingEdit>
    </>
  );
};
