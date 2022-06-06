import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { GalerieComponent } from './galerie.component';

export default {
  title: 'Composite/Galerie',
  decorators: [
    moduleMetadata({
      declarations: [GalerieComponent],
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div class="" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<GalerieComponent>;

const Template: Story<GalerieComponent> = (args: GalerieComponent) => ({
  component: GalerieComponent,
  props: args,
});

const mock = [
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test1.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test2.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test3.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test4.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test11.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test6.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test7.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test8.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test9.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test10.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test5.jpg',
          },
        },
      },
    },
  },
  {
    fields: {
      name: 'tomate',
      image: {
        fields: {
          file: {
            url: 'assets/images/test12.jpg',
          },
        },
      },
    },
  },
];

export const intagrated = Template.bind({});
intagrated.args = { posts: mock };
