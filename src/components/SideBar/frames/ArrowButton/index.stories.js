import React from 'react';

import ArrowButton from '.';

export default {
  title: 'Sidebar/ArrowButton',
  component: ArrowButton,
  argTypes: {
    // типы для пропсов
    setIsSideBarActive: { action: 'setIsSideBarActive' },
    isSideBarActive: {
      table: {
        type: {
          summary: 'boolean',
        },
      },
      description: 'isSideBarActive',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <ArrowButton {...args} />;

export const SideBarNotActive = Template.bind({});
SideBarNotActive.args = {
  isSideBarActive: false,
};

export const SideBarActive = Template.bind({});
SideBarActive.args = {
  isSideBarActive: true,
};
