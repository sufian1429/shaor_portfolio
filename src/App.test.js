import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('lenis', () => class { destroy() {} });

beforeAll(() => {
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test('renders name and all sections', () => {
  const { container } = render(<App />);
  expect(screen.getAllByText(/Sufian Maseng/).length).toBeGreaterThan(0);
  ['home', 'about', 'portfolio', 'contact'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeInTheDocument();
  });
});
