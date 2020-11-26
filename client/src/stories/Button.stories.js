import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Evaluation/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
         { name: 'bgDark', value: '#151935' },
         { name: 'bgLight', value: '#1b223e' },
         { name: 'accentColor', value: '#ffe400' },
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
