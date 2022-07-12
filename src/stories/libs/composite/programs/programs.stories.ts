import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { ProgramsComponent } from './programs.component';

export default {
  title: 'Composite/programs',
  decorators: [
    moduleMetadata({
      declarations: [ProgramsComponent],
      imports: [CommonModule, FontAwesomeModule],
    }),
    componentWrapperDecorator((story) => `<div class="m-10" >${story}</div>`),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ProgramsComponent>;

const Template: Story<ProgramsComponent> = (args: ProgramsComponent) => ({
  component: ProgramsComponent,
  props: args,
});

export const intagrated = Template.bind({});
intagrated.args = {};
