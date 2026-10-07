import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from './EmptyState';

describe('EmptyState Component', () => {
  it('renders title and description', () => {
    render(
      <EmptyState
        title="Zero Results Found"
        description="Try adjusting your filter search criteria."
      />
    );
    expect(screen.getByText('Zero Results Found')).toBeInTheDocument();
    expect(
      screen.getByText('Try adjusting your filter search criteria.')
    ).toBeInTheDocument();
  });

  it('renders primary and secondary action elements', () => {
    render(
      <EmptyState
        title="No Records"
        action={<button>Add Record</button>}
        secondaryAction={<button>Learn More</button>}
      />
    );
    expect(screen.getByText('Add Record')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders custom icon slot', () => {
    render(
      <EmptyState
        title="Custom State"
        icon={<span data-testid="custom-icon">ICON</span>}
      />
    );
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
});
