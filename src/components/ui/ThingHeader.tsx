import * as React from "react";

type Props = {
    Title: string;
    DisplayDate: string
};

export default ({ Title, DisplayDate }: Props) =>
    <div>
        <div className="header1">{Title}</div>
        <div className="subTitle1">{DisplayDate}</div>
    </div>
