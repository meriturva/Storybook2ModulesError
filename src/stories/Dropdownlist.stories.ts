import {
  type Meta,
  type StoryObj,
  moduleMetadata,
  applicationConfig,
} from '@storybook/angular';

import {
  DropDownListComponent,
  DropDownListModule,
} from '@progress/kendo-angular-dropdowns';
import { provideAnimations } from '@angular/platform-browser/animations';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DropDownListComponent> = {
  title: 'Kendo/DropDownList',
  component: DropDownListComponent,
  decorators: [
    moduleMetadata({
      imports: [DropDownListModule],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],

  tags: ['autodocs'],
  render: (args: DropDownListComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<DropDownListComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Normal: Story = {
  args: {
    data: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
  },
};
