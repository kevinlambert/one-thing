import * as React from "react";

type Props = {
  checked: boolean;
  label: string;
  id: string;
};

export default ({ checked = false, label, id }: Props) => {
  const onChangeHandler = (e: any) => {
    checked = e.target.value;
  };

  return (
    <>
      <input
        id={id}
        type="checkbox"
        className=""
        onChange={onChangeHandler}
      ></input>
      <label htmlFor={id}>{label}</label>
    </>
  );
};
