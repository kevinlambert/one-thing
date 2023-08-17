import * as React from "react";

type Props = {
  text: string;
  label: string;
};

export default ({ text, label }: Props) => {
  const onChangeHandler = (e: any) => {
    text = e.target.value;
  };

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        className=""
        defaultValue={text}
        onChange={onChangeHandler}
      ></input>
    </>
  );
};
