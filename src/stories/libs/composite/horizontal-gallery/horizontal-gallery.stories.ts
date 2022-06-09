import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import { HorizontalGalleryComponent } from './horizontal-gallery.component';

export default {
  title: 'Composite/Horizontal-galerie',
  decorators: [
    moduleMetadata({
      declarations: [HorizontalGalleryComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HorizontalGalleryComponent>;

const Template: Story<HorizontalGalleryComponent> = (
  args: HorizontalGalleryComponent
) => ({
  component: HorizontalGalleryComponent,
  props: args,
});
const mock = [
  {
    src: './assets/images/muscu-test.jpg',
    alt: 'MUSCULATION',
    link: '',
  },
  {
    src: './assets/images/recette-test.jpg',
    alt: 'RECETTES',
    link: '',
  },
  {
    src: './assets/images/entrainement-test.jpg',
    alt: 'ENREAINEMENTS',
    link: '',
  },
  {
    src: './assets/images/defis-test.png',
    alt: 'DÉFIS',
    link: '',
  },
];

export const intagrated = Template.bind({});
intagrated.args = { cards: mock };
