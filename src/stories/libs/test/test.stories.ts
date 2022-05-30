import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { TestComponent } from './test.component';

export default {
  title: 'Composite/blocTelMail',
  decorators: [
    moduleMetadata({
      declarations: [TestComponent],
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div class="container mt-30" >${story}</div>`
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TestComponent>;

const Template: Story<TestComponent> = (args: TestComponent) => ({
  component: TestComponent,
  props: args,
});

const mock = {
  information:
    'Pressées ? Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  phoneNumber: {
    label: '(+33) 0 825 082 509',
    url: '',
  },
  openingInfo: 'Du lundi au vendredi de 9h à 18h',
};

// export const phone = Template.bind({});
// phone.args = {
//   ...mock,
//   type: 'phone',
//   isExpertTricot: false,
// };

// export const phoneExpertTricot = Template.bind({});
// phoneExpertTricot.args = {
//   ...mock,
//   type: 'phone',
//   isExpertTricot: true,
// };

// export const mail = Template.bind({});
// mail.args = {
//   ...mock,
//   type: 'email',
// };

// export const visio = Template.bind({});
// visio.args = {
//   ...mock,
//   type: 'visio',
// };
