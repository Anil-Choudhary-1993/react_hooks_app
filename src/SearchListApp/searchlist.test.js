import React from 'react';
import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import SearchList from './index';

describe('Testing SearchList App', () => {
  beforeEach(() => {
    render(<SearchList />);
  })

  it('Should Render SearchList app with input textbox and button', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should show loading initially', () => {
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Loading...');
  })

  it('Should render list after some delay', async () => {
    let LoadingElement = screen.getByRole('heading', { level: 3, name: 'Loading...' });
    expect(LoadingElement.textContent).toBe('Loading...');
    await waitFor(() => {
      // expect(LoadingElement).not.toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
    }, { timeout: 3000, interval: 50 });

    expect(screen.getAllByRole('listitem').length).toBe(20);
  })

  it('Should allow user to type some tect and render list after some delay', async () => {

    expect(screen.getByRole('heading', { level: 3, name: 'Loading...' })).toBeInTheDocument();

    await waitFor(() => {
      // expect(screen.getByRole('heading', { level: 3, name: 'Loading...' })).not.toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
    }, { timeout: 3000, interval: 50 });

    expect(screen.getAllByRole('listitem').length).toBe(20);

    let InputElement = screen.getByRole('textbox');
    fireEvent.change(InputElement, {
      target: {
        value: 'react testing'
      }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(screen.getByRole('heading', { level: 3, name: 'Loading...' })).toBeInTheDocument();

    await waitFor(() => {
      // expect(LoadingElement).not.toBeInTheDocument();
      expect(screen.getByRole('list')).toBeInTheDocument();
    }, { timeout: 3000, interval: 50 });

    expect(screen.getAllByRole('listitem').length).toBe(20);

  })

})