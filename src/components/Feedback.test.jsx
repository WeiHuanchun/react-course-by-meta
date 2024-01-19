// FILEPATH: /Users/huntley/vscode-workspace/react-course-by-meta/src/components/Feedback.test.jsx
/* eslint-env jest */

import { render, fireEvent } from '@testing-library/react';
import Feedback from './Feedback.jsx';

describe('Feedback', () => {
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
  });

  test('calls onSubmit prop when form is submitted', () => {
    const { getByRole } = render(<Feedback onSubmit={mockSubmit} />);
    fireEvent.submit(getByRole('button'));
    expect(mockSubmit).toHaveBeenCalled();
  });

  test('resets comment and score after form submission', () => {
    const { getByRole, getByLabelText } = render(
      <Feedback onSubmit={mockSubmit} />,
    );
    fireEvent.change(getByLabelText(/score/i), { target: { value: '5' } });
    fireEvent.change(getByLabelText(/comment/i), {
      target: { value: 'This is a comment' },
    });
    fireEvent.submit(getByRole('button'));
    expect(getByLabelText(/score/i).value).toBe('10');
    expect(getByLabelText(/comment/i).value).toBe('');
  });

  test('shows alert when score is less than 5 and comment length is less than 10', () => {
    const { getByRole, getByLabelText } = render(
      <Feedback onSubmit={mockSubmit} />,
    );
    window.alert = jest.fn();
    fireEvent.change(getByLabelText(/score/i), { target: { value: '4' } });
    fireEvent.change(getByLabelText(/comment/i), {
      target: { value: 'Short' },
    });
    fireEvent.submit(getByRole('button'));
    expect(window.alert).toHaveBeenCalledWith(
      'Please provide detailed feedback',
    );
  });
});
