import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { RecipeDescriptionComponent } from './recipe-description.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  title: 'Composite/recipe-description',
  decorators: [
    moduleMetadata({
      declarations: [RecipeDescriptionComponent],
      imports: [CommonModule, FontAwesomeModule],
      providers: [],
    }),
    componentWrapperDecorator((story) => `<div class="mt-3" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RecipeDescriptionComponent>;

const Template: Story<RecipeDescriptionComponent> = (
  args: RecipeDescriptionComponent
) => ({
  component: RecipeDescriptionComponent,
  props: args,
});
export const intagrated = Template.bind({});
intagrated.args = {
  difficulty: 'Facile',
  time: 15,
  calories: 500,
};
