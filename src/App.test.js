import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
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
