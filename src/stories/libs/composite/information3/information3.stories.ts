import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { Information3Component } from './information3.component';

export default {
  title: 'Composite/informations/information3',
  decorators: [
    moduleMetadata({
      declarations: [Information3Component],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="m-20" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<Information3Component>;

const Template: Story<Information3Component> = (
  args: Information3Component
) => ({
  component: Information3Component,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {};
