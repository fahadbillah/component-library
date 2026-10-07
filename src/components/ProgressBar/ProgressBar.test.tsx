import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar Component', () => {
  it('renders determinate progress bar with aria attributes', () => {
    render(
      <ProgressBar
        value={40}
        min={0}
        max={100}
        label="Progress Label"
        showValue
      />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '40');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(screen.getByText('Progress Label')).toBeInTheDocument();
    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  it('renders indeterminate mode without aria-valuenow', () => {
    render(<ProgressBar indeterminate label="Loading..." />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('clamps values within bounds', () => {
    render(<ProgressBar value={150} min={0} max={100} showValue />);
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100'
    );
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
