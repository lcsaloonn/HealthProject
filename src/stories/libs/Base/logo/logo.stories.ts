import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'Base/logo',
  decorators: [
    moduleMetadata({
      declarations: [LogoComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<LogoComponent>;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  component: LogoComponent,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {};
