import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { Information1Component } from './information1.component';

export default {
  title: 'Composite/information-1',
  decorators: [
    moduleMetadata({
      declarations: [Information1Component],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<Information1Component>;

const Template: Story<Information1Component> = (
  args: Information1Component
) => ({
  component: Information1Component,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {};
