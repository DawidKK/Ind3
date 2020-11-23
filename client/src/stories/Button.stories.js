import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Evaluation/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
         { name: 'red', value: '#f00', },
         { name: 'green', value: '#0f0', },
         { name: 'blue', value: '#00f', },
      ]
    }
  }
}

const Template = (args) => <Button {...args} />

export const FullWidth = Template.bind({})
export const AutoWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  label: 'Submit',
}

AutoWidth.args = {
  fullWidth: false,
  label: 'Submit',
}
