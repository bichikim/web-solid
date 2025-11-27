import preview from '#.storybook/preview';
import {Logo} from 'src/components/Logo';
import {expect, fireEvent, fn, within} from '@storybook/test'

const Test = () => {
  return <div>Test</div>;
};

const meta = preview.meta({
  title: "Example/Logo",
  component: Logo,
  tags: ['autodocs'],
});

export const Default = meta.story({
  args: {
    label: "Test",
  },
});
