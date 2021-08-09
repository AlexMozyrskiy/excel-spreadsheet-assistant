import React from "react";

import MunuItem from ".";

import { text, boolean } from "@storybook/addon-knobs";

import st from "./index.module.scss";

export default {
  title: "Nav/MenuItems",
  component: MunuItem,
};

export const MunuItemWithTitle = () => (
  <MunuItem title={text("Title", "Test")} />
);
