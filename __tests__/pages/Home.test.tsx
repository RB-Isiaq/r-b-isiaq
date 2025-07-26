import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Home page', () => {
  it('shows the Home page in the document', () => {
    render(<Home />);
    const homePage = screen.getByTestId('home_page');
    expect(homePage).toBeInTheDocument();
  });
});
