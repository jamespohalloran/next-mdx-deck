import React from "react";
import styled from "styled-components";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const StyledCover = styled.div``;

export default function Cover({ children }) {
  return (
    <StyledCover>
      <TinaMarkdown components={{}} content={children}></TinaMarkdown>
    </StyledCover>
  );
}
