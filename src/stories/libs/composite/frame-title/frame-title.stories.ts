import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { FrameTitleComponent } from './frame-title.component';

export default {
  title: 'Composite/Frame-title',
  decorators: [
    moduleMetadata({
      declarations: [FrameTitleComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="m-20" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FrameTitleComponent>;

const Template: Story<FrameTitleComponent> = (args: FrameTitleComponent) => ({
  component: FrameTitleComponent,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {
  title: 'Étape 1',
};
