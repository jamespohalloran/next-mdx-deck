import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function SpeakerNotes({ children }) {
  return <TinaMarkdown components={{}} content={children}></TinaMarkdown>;
}
