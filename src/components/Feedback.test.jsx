/* eslint.env jest */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, jest } from 'jest'; // Add the import statements for 'describe', 'it', and 'expect'
import Feedback from './Feedback';

describe('Feedback', () => {
  it('renders without errors', () => {
    render(<Feedback onSubmit={() => {}} />);
    // Assert that the component renders without throwing any errors
  });

  it('calls onSubmit when the form is submitted', () => {
    const onSubmitMock = jest.fn();
    render(<Feedback onSubmit={onSubmitMock} />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, world!',
    });
  });
});
