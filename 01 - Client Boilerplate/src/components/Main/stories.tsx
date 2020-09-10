import { Story, Meta } from '@storybook/react/types-6-0';
import Main, { MainProps } from '.';

export default {
  title: 'Main',
  component: Main
} as Meta;

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Basic = Template.bind({});
// Basic.args = {};
