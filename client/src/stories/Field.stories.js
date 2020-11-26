import React from 'react';

import { Field } from '../components/Field';

export default {
  title: 'Evaluation/Field',
  component: Field,
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

const Template = (args) => <Field {...args} />

export const Empty = Template.bind({})
export const Value = Template.bind({})

Empty.args = {
  name: 'addTodo',
  value: ''
}

Value.args = {
  name: 'addTodo',
  value: 'Test value'
}
