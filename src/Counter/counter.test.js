import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

describe('Testing Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  })

  it("Rendering Counter Component", () => {
    const CounterComponent = screen.getByRole("heading", { level: 1, name: 'Counter App' });
    expect(CounterComponent).toBeInTheDocument();
  })

  it("Counter has default value 0f 0", () => {
    const CounterElement = screen.getByRole("heading", { level: 2 });
    expect(CounterElement.textContent).toBe("0");
  })

  it("Input field having default value 0f 1 exits in the document", () => {
    // const CounterInputElement = screen.getByDisplayValue("1");
    const CounterInputElement = screen.getByLabelText('counterInput');
    expect(CounterInputElement).toBeInTheDocument();
    expect(CounterInputElement.value).toBe("1");
  })

  it("Add Button with + symbol should exists", () => {
    const AddButtonElement = screen.getByText("+");
    expect(AddButtonElement).toBeInTheDocument();
  })

  it("Subtract Button with - symbol should exists", () => {
    const SubtractButtonElement = screen.getByText("-");
    expect(SubtractButtonElement).toBeInTheDocument();
  })

  it("Click on increment + button will increment the count value", () => {
    const CounterElement = screen.getByRole("heading", { level: 2 });
    const AddButtonElement = screen.getByText("+");
    expect(CounterElement.textContent).toBe("0");
    userEvent.click(AddButtonElement)
    expect(CounterElement.textContent).toBe("1");
  })

  it("Click on increment + button will decrement the count value", () => {
    const CounterElement = screen.getByRole("heading", { level: 2 });
    const SubtractButtonElement = screen.getByText("-");
    expect(CounterElement.textContent).toBe("0");
    userEvent.click(SubtractButtonElement)
    expect(CounterElement.textContent).toBe("-1");
  })

  it("Click on increment + and decrement - button will increment and decrement the count value based on their order", () => {
    const CounterElement = screen.getByRole("heading", { level: 2 });
    const SubtractButtonElement = screen.getByText("-");
    const AddButtonElement = screen.getByText("+");
    expect(CounterElement.textContent).toBe("0");
    userEvent.click(SubtractButtonElement);
    userEvent.click(SubtractButtonElement);
    expect(CounterElement.textContent).toBe("-2");
    userEvent.click(AddButtonElement);
    userEvent.click(AddButtonElement);
    userEvent.click(AddButtonElement);
    expect(CounterElement.textContent).toBe("1");
  })

  it("Change the input field will update its value", () => {
    const CounterInputElement = screen.getByLabelText('counterInput');
    expect(CounterInputElement.value).toBe("1");
    userEvent.type(CounterInputElement, "10");
    expect(CounterInputElement.value).toBe("110");
  })


  it("Change the input field will update its value and do increment/decrement operation", () => {
    const CounterElement = screen.getByRole("heading", { level: 2 });
    const CounterInputElement = screen.getByLabelText('counterInput');
    const SubtractButtonElement = screen.getByText("-");
    const AddButtonElement = screen.getByText("+");
    expect(CounterElement.textContent).toEqual("0")
    expect(CounterInputElement.value).toBe("1");
    userEvent.type(CounterInputElement, "0");
    expect(CounterInputElement.value).toBe("10");
    userEvent.click(AddButtonElement);
    expect(CounterElement.textContent).toEqual("10")
    userEvent.click(AddButtonElement);
    expect(CounterElement.textContent).toEqual("20")
    userEvent.click(SubtractButtonElement);
    userEvent.click(SubtractButtonElement);
    expect(CounterElement.textContent).toEqual("0")
  })
})