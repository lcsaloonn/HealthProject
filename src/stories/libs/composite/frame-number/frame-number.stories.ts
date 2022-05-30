import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { FrameNumberComponent } from './frame-number.component';

export default {
  title: 'Composite/Frame-number',
  decorators: [
    moduleMetadata({
      declarations: [FrameNumberComponent],
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mt-30" >${story}</div>`
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FrameNumberComponent>;

const Template: Story<FrameNumberComponent> = (args: FrameNumberComponent) => ({
  component: FrameNumberComponent,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {
  title: 'Thomas',
};
