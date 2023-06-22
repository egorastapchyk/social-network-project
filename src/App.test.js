import { render, screen } from '@testing-library/react';
import MainApp from './App';
import { createRoot } from 'react-dom/client';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   const root = createRoot(div);
//   root.render(<MainApp tab="home" />);
//   root.unmount();
// });
