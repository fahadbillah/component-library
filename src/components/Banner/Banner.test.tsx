import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Banner } from './Banner';

describe('Banner Component', () => {
  it('renders title and message description', () => {
    render(<Banner title="Alert Title">Description message</Banner>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Description message')).toBeInTheDocument();
  });

  it('renders action element', () => {
    render(
      <Banner title="Notice" action={<button>Action CTA</button>}>
        Body
      </Banner>
    );
    expect(screen.getByText('Action CTA')).toBeInTheDocument();
  });

  it('handles dismiss action and fires onDismiss callback', async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(
      <Banner title="Dismissible" dismissible onDismiss={handleDismiss}>
        Dismiss text
      </Banner>
    );

    const dismissBtn = screen.getByRole('button', { name: /dismiss banner/i });
    expect(dismissBtn).toBeInTheDocument();

    await user.click(dismissBtn);
    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
