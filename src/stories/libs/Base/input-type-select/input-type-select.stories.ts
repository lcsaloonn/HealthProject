import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { InputTypeSelectComponent } from './input-type-select.component';

export default {
  title: 'Base/input-type-select',
  decorators: [
    moduleMetadata({
      declarations: [InputTypeSelectComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<InputTypeSelectComponent>;

const Template: Story<InputTypeSelectComponent> = (
  args: InputTypeSelectComponent
) => ({
  component: InputTypeSelectComponent,
  props: args,
});
export const normalSelect = Template.bind({});
normalSelect.args = {
  title: 'Test 1',
  selectInfos: ['chien', 'chat', 'pigeon'],
  informationText:
    "*non obligtoire, vous pouvez lancer sans programme d'entrainement et choisir vos exercices au fur et à mesure de votre séance",
};

export const requiredInput = Template.bind({});
requiredInput.args = {
  title: 'Test 1',
};

export const customText = Template.bind({});
customText.args = {
  title: 'Test 1',
};
