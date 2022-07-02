import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { SelectResearchComponent } from './select-research.component';

export default {
  title: 'Base/select/select-research',
  decorators: [
    moduleMetadata({
      declarations: [SelectResearchComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<SelectResearchComponent>;

const Template: Story<SelectResearchComponent> = (
  args: SelectResearchComponent
) => ({
  component: SelectResearchComponent,
  props: args,
});
export const normalSelect = Template.bind({});
normalSelect.args = {
  items: ['item1', 'item2', 'item3', 'chat', 'chien', 'cheval'],
  selectName: 'Selectionner',
};
