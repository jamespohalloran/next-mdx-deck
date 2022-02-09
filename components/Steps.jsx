import React from "react";
import Step from "./Step";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Steps = ({ children, items }) => {
  const renderChildren = () => {
    return (items || []).map((children, index) => {
      return (
        <element.type order={index} {...element.props}>
          {element.props.children}
        </element.type>
      );
    });
  };
  return <div>{renderChildren()}</div>;
};

export default Steps;
