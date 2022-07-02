import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { InputTypeComponent } from './input-type.component';

export default {
  title: 'Base/input-type-text',
  decorators: [
    moduleMetadata({
      declarations: [InputTypeComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<InputTypeComponent>;

const Template: Story<InputTypeComponent> = (args: InputTypeComponent) => ({
  component: InputTypeComponent,
  props: args,
});
export const normalInput = Template.bind({});
normalInput.args = {
  title: 'Test 1',
};

export const requiredInput = Template.bind({});
requiredInput.args = {
  title: 'Test 1',
  requiredField: true,
};

export const customText = Template.bind({});
customText.args = {
  title: 'Test 1',
  requiredField: true,
  customText: '*obligatoire à conditions de .. ',
};
