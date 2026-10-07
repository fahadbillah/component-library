import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Accordion } from './Accordion';

const items = [
  { id: 'item-1', title: 'Header One', content: 'Content One' },
  { id: 'item-2', title: 'Header Two', content: 'Content Two' },
  {
    id: 'item-3',
    title: 'Header Three',
    content: 'Content Three',
    disabled: true,
  },
];

describe('Accordion Component', () => {
  it('renders all accordion items', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Header One')).toBeInTheDocument();
    expect(screen.getByText('Header Two')).toBeInTheDocument();
    expect(screen.getByText('Header Three')).toBeInTheDocument();
  });

  it('toggles expansion on header click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} defaultExpandedIds={['item-1']} />);

    expect(screen.getByText('Content One')).toBeVisible();
    expect(screen.queryByText('Content Two')).not.toBeVisible();

    await user.click(screen.getByText('Header Two'));
    expect(screen.getByText('Content Two')).toBeVisible();
    // Default single mode closes item 1
    expect(screen.queryByText('Content One')).not.toBeVisible();
  });

  it('allows multiple items open when allowMultiple is true', async () => {
    const user = userEvent.setup();
    render(
      <Accordion items={items} allowMultiple defaultExpandedIds={['item-1']} />
    );

    await user.click(screen.getByText('Header Two'));
    expect(screen.getByText('Content One')).toBeVisible();
    expect(screen.getByText('Content Two')).toBeVisible();
  });

  it('does not toggle disabled items', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);

    await user.click(screen.getByText('Header Three'));
    expect(screen.queryByText('Content Three')).not.toBeVisible();
  });

  it('fires onChange callback when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Accordion items={items} onChange={handleChange} />);

    await user.click(screen.getByText('Header One'));
    expect(handleChange).toHaveBeenCalledWith(['item-1']);
  });
});
