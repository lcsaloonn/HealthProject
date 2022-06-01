import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { IngredientListComponent } from './ingredient-list.component';
import { Iingredient } from 'src/interface/ingredient.interface';
import { CommonModule } from '@angular/common';

export default {
  title: 'Composite/ingredient-list',
  decorators: [
    moduleMetadata({
      declarations: [IngredientListComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator((story) => `<div class="mt-3" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<IngredientListComponent>;

const Template: Story<IngredientListComponent> = (
  args: IngredientListComponent
) => ({
  component: IngredientListComponent,
  props: args,
});
const mock: Iingredient[] = [
  {
    name: 'Tomate',
    quantity: 5,
    quantityValue: 'kg',
    description: '',
  },
  {
    name: 'Chou',
    quantity: 5,
    quantityValue: 'kg',
    description: '',
  },
  {
    name: 'Patate',
    quantity: 5,
    quantityValue: 'kg',
    description: 'couper en rondelle',
  },
  {
    name: 'Tomate',
    quantity: 5,
    quantityValue: 'kg',
    description: '',
  },
];
export const intagrated = Template.bind({});
intagrated.args = { ingredients: mock };
