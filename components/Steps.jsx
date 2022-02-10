import React from "react";
import Step from "./Step";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Steps = ({ items }) => {
  const renderChildren = () => {
    console.log("render steps ", items);

    return (items || []).map((item, index) => {
      console.log("item ", item);
      return <Step order={index}>{item}</Step>;
    });
  };
  //return <div>DUMMY STEPS</div>;
  return <div>{renderChildren()}</div>;
};

export default Steps;
