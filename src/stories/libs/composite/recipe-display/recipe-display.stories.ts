import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeDisplayComponent } from './recipe-display.component';

export default {
  title: 'Composite/recipe-description',
  decorators: [
    moduleMetadata({
      declarations: [RecipeDisplayComponent],
      imports: [CommonModule, FontAwesomeModule],
      providers: [],
    }),
    componentWrapperDecorator((story) => `<div class="mt-3" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RecipeDisplayComponent>;

const Template: Story<RecipeDisplayComponent> = (
  args: RecipeDisplayComponent
) => ({
  component: RecipeDisplayComponent,
  props: args,
});
export const intagrated = Template.bind({});
intagrated.args = {};
