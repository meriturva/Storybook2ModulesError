import {
  type Meta,
  type StoryObj,
  moduleMetadata,
  applicationConfig,
  argsToTemplate,
} from '@storybook/angular';

import {
  DropDownListComponent,
  DropDownListModule,
} from '@progress/kendo-angular-dropdowns';
import { provideAnimations } from '@angular/platform-browser/animations';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<DropDownListComponent> = {
  title: 'Kendo/DropDownListArgs',
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
    template: `<kendo-dropdownlist ${argsToTemplate(args)}></kendo-dropdownlist>`,
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<DropDownListComponent & {class: string}>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Normal: Story = {
  args: {
    data: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']
  },
};

export const WithClass: Story = {
  args: {
    data: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
    class: "border"
  },
};
