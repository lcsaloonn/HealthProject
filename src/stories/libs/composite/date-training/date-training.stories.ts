import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { DateTrainingComponent } from './date-training.component';

export default {
  title: 'Composite/training/date',
  decorators: [
    moduleMetadata({
      declarations: [DateTrainingComponent],
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div class="content-container" >${story}</div>`
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<DateTrainingComponent>;

const Template: Story<DateTrainingComponent> = (
  args: DateTrainingComponent
) => ({
  component: DateTrainingComponent,
  props: args,
  DateTrainingComponent,
});

export const intagrated = Template.bind({});
intagrated.args = {};
