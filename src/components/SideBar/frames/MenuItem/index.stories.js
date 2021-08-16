import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import testIcon from '../../sources/Icon.svg';
import downloadIcon from '../../sources/download.svg';

import MenuItem from '.';

export default {
  title: 'Sidebar/MenuItem',
  component: MenuItem,
  decorators: [
    (Story) => (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    // типы для пропсов
    icon: {},
    title: {
      table: {
        type: {
          summary: 'text',
        },
      },
      description: 'title of Munu Item',
      control: {
        type: 'text',
      },
    },
    path: {
      table: {
        type: {
          summary: 'text',
        },
      },
      description: 'history push by NavLink',
      control: {
        type: 'text',
      },
    },
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

const Template = (args) => <MenuItem {...args} />;

export const DownLoadFile = Template.bind({});
DownLoadFile.args = {
  title: 'Загрузить файл',
  path: '/upload',
  isSideBarActive: true,
  icon: downloadIcon,
};
