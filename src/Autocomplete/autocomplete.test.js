import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Autocomplete from './index';

describe('Testing Autocomplete Component', () => {
  beforeEach(() => {
    const Data = ['Mango', 'Apple', 'Pineapple']
    render(<Autocomplete suggestions={Data} />);
  })

  it('Rendering Autocomplete component', () => {
    const AutocompleteComponent = screen.getByRole('heading', { level: 1 });
    expect(AutocompleteComponent.textContent).toBe('React Autocomplete Demo')
  })

  it('Component should show input field', () => {
    const InputElement = screen.getByRole('textbox');
    expect(InputElement).toBeInTheDocument();
  })

  it('Component should not show any suggestion by default', () => {
    const SuggestionsElement = screen.queryByRole('list');
    expect(SuggestionsElement).not.toBeInTheDocument();
  })

  it('Type text in the input will show the input text on the screen', () => {
    const InputElement = screen.getByRole('textbox');
    useEvent.type(InputElement, "Mango");
    expect(InputElement.value).toBe("Mango");
  })

  it('Type character a in the input will show the text a on the screen and will show the suggestion', () => {
    const InputElement = screen.getByRole('textbox');
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    const SuggestionsElement = screen.getByRole('list');
    expect(SuggestionsElement.childElementCount).toBe(3);
  })

  it('Type some character and use keyboard arrow down keys to move down to options and press enter to select the option value', () => {
    const InputElement = screen.getByRole('textbox');
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: 'Enter', which: 13, keyCode: 13 });
    expect(InputElement.value).toBe("Mango");
  })

  it('Type some character and use keyboard arrow down keys multiple times to move down to options and press enter to select the option value', () => {
    const InputElement = screen.getByRole('textbox');
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: 'Enter', which: 13, keyCode: 13 });
    expect(InputElement.value).toBe("Apple");
  })

  it('Type some character and use keyboard arrow down keys multiple times  and then arrow up key to move up to options and press enter to select the option value', () => {
    const InputElement = screen.getByRole('textbox');
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: "ArrowUp", which: 38, keyCode: 38 });
    fireEvent.keyDown(InputElement, { key: 'Enter', which: 13, keyCode: 13 });
    expect(InputElement.value).toBe("Apple");
  })

  it('Type some character and select one of the option by clicking on the option value', async () => {
    let InputElement = screen.getByRole('textbox');
    let SuggestionsElement = screen.queryByRole('list');
    expect(SuggestionsElement).not.toBeInTheDocument();
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    SuggestionsElement = screen.queryByRole('list');
    expect(SuggestionsElement).toBeInTheDocument();
    expect(SuggestionsElement.childElementCount).toBe(3);
    const AppleElement = screen.getByText("Apple");
    expect(AppleElement).toBeInTheDocument();
    fireEvent.click(AppleElement);
    await waitFor(async () => {
      expect(screen.getByRole('textbox').value).toBe('Apple');
    })
  })

  it('Current focused link Item should have highlight classname', () => {
    let InputElement = screen.getByRole('textbox');
    let SuggestionsElement = screen.queryByRole('list');
    expect(SuggestionsElement).not.toBeInTheDocument();
    useEvent.type(InputElement, "a");
    expect(InputElement.value).toBe("a");
    SuggestionsElement = screen.queryByRole('list');
    expect(SuggestionsElement).toBeInTheDocument();
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    fireEvent.keyDown(InputElement, { key: "ArrowDown", which: 40, keyCode: 40 });
    let listItemElement = screen.getByText('Apple');
    expect(listItemElement.className).toBe('highlight');
  })
})