import React from "react";
import Step from "./Step";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Steps = ({ children }) => {
  const renderChildren = () => {
    console.log("render steps ", children);

    return (children.children[0].children || [])
      .filter((c) => c.name == "Step")
      .map((item, index) => {
        console.log("item ", item);
        return (
          <Step order={index} {...item.props}>
            {item.props.children.children[0].text}
          </Step>
        );
      });
  };
  //return <div>DUMMY STEPS</div>;
  return <div>{renderChildren()}</div>;
};

export default Steps;
