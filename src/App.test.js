import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, Simulate, wait, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
afterEach(cleanup);

describe('App', () => {
  it('renders', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('has a header', () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll('header').length).toEqual(1);
    expect(container.querySelectorAll('h1').length).toEqual(1);
  });
  describe('programmeTable', () => {
    it('has the columns id, name, description, active ', () => {
      const { getByText } = render(<App />);
      expect(getByText('ID')).toBeInTheDocument();
      expect(getByText('Name')).toBeInTheDocument();
      expect(getByText('Description')).toBeInTheDocument();
      expect(getByText('Active')).toBeInTheDocument();
    });
  });
});
