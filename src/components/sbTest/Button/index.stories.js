import React from "react";

import Button from "./";

import { text, boolean } from "@storybook/addon-knobs";

import st from "./index.module.scss";

export default {
  title: "Form/control/Button",
  component: Button,
  argTypes: {
    // типы для пропсов
    title: { control: "text" }, // для аддона controls
    className: { control: "text" },
    disabled: { control: "boolean" },
    onClickHandler: { action: "clicked" },
  },
  args: {
    title: "Button", // проп по умолчанию для всей стори
  },
  // decorators: [story => <Center>{story()}</Center>]   // оборачивет все компоненты, можно добавить декоратор глобально в файле preview.js
};

// export const Primary = () => <Button variant={st.button_primary}>Primary</Button>
// export const Secondary = () => <Button variant={st.button_secondary}>Secondary</Button>
// export const Success = () => <Button variant={st.button_success}>Success</Button>
// export const Danger = () => <Button variant={st.button_danger}>Danger</Button>

// Primary.storyName = 'Primary Button';       // именуем компонент, теперь в дереве он булет отображаться с таким именем

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  title: "PrimaryA", // переопределяем проп по умолчанию
  className: st.button_primary,
};

export const DangerA = Template.bind({});
DangerA.args = {
  className: st.button_danger,
};

export const Knobs = () => (
  <Button
    className={text("ClassName", st.button_perple)}
    isDisabled={boolean("Disabled", false)}
    title={text("Title", "Test Knobs")}
  />
);
