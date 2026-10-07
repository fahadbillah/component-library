import { render, screen, act, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Tooltip } from './Tooltip';

describe('Tooltip Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows tooltip content on hover after delay', () => {
    render(
      <Tooltip content="Tooltip message" delay={100}>
        <button>Hover me</button>
      </Tooltip>
    );

    const button = screen.getByText('Hover me');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    act(() => {
      fireEvent.mouseEnter(button);
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip message');

    act(() => {
      fireEvent.mouseLeave(button);
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('shows tooltip on focus and hides on blur', () => {
    render(
      <Tooltip content="Focus message" delay={50}>
        <button>Focus me</button>
      </Tooltip>
    );

    const button = screen.getByText('Focus me');

    act(() => {
      button.focus();
    });

    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(screen.getByRole('tooltip')).toHaveTextContent('Focus message');

    act(() => {
      button.blur();
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not display when disabled', () => {
    render(
      <Tooltip content="Disabled tooltip" disabled delay={50}>
        <button>Disabled trigger</button>
      </Tooltip>
    );

    const button = screen.getByText('Disabled trigger');

    act(() => {
      button.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      vi.advanceTimersByTime(50);
    });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});
