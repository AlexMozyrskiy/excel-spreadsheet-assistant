export default {
  title: 'General/Alert',
  component: Alert,
  parameters: {
    controls: { expanded: true }, // Show full documentation for each property
  },
  argTypes: {
    type: {
      description: 'Alert.Types',
      defaultValue: Alert.Types.WARNING,
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: Alert.Types.WARNING,
        },
      },
      options: Alert.Types,
      control: {
        type: 'select', // for selecting between the array of options above
      },
    },

    title: {
      defaultValue: '',
      table: {
        type: {
          summary: 'string',
        },
      },
      description: 'An optional title',
      control: {
        type: 'text',
      },
    },

    onClose: {
      table: {
        type: {
          summary: 'func',
        },
      },
      description: '× button click callback',
      control: { type: null },
    },

    children: {
      description: 'The message body (mandatory)',
      type: {
        required: true,
      },
      table: {
        type: {
          summary: 'node',
        },
      },
      control: { type: null },
    },
  },
};

//...export your story...
