import { updateTimes, initializeTimes } from './Main';
import { fetchAPI } from './api';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock fetchAPI
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

describe('initializeTimes', () => {
  test('should return array of time strings from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const date = new Date('2025-08-30');
    const times = initializeTimes(date);

    expect(fetchAPI).toHaveBeenCalledWith(date);
    expect(times).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test('should return initialized times if action type is UPDATE_TIMES', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const state = ['17:00'];
    const action = { type: 'UPDATE_TIMES', date: new Date('2025-08-30') };

    const newState = updateTimes(state, action);

    expect(fetchAPI).toHaveBeenCalledWith(action.date);
    expect(newState).toEqual(mockTimes);
  });

  test('should return the same state if action type is unknown', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = updateTimes(state, action);

    expect(newState).toEqual(state);
  });
});

const mockOnSubmit = jest.fn();
const mockDispatch = jest.fn();

beforeEach(() => {
  render(<BookingForm onSubmit={mockOnSubmit} dispatch={mockDispatch} />);
});

test('Guests input should have type number, min 1, max 10, and required', () => {
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toBeRequired();
});

test('Date input should have type date and be required', () => {
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toBeRequired();
});

test('Time select should be a dropdown (select) and required', () => {
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect.tagName).toBe('SELECT');
  expect(timeSelect).toBeRequired();
});

test('Location select should be a dropdown (select) and required', () => {
  const locationSelect = screen.getByLabelText(/location/i);
  expect(locationSelect.tagName).toBe('SELECT');
  expect(locationSelect).toBeRequired();
});

test('Wheelchair checkbox should be type checkbox and not required', () => {
  const checkbox = screen.getByLabelText(/wheelchair accessible/i);
  expect(checkbox).toHaveAttribute('type', 'checkbox');
  expect(checkbox).not.toBeRequired();
});

test('Occasion select should be a dropdown (select) and required', () => {
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect.tagName).toBe('SELECT');
  expect(occasionSelect).toBeRequired();
});

test('First name input should be text and required', () => {
  const firstNameInput = screen.getByLabelText(/first name/i);
  expect(firstNameInput).toHaveAttribute('type', 'text');
  expect(firstNameInput).toBeRequired();
});

test('Last name input should be text and required', () => {
  const lastNameInput = screen.getByLabelText(/last name/i);
  expect(lastNameInput).toHaveAttribute('type', 'text');
  expect(lastNameInput).toBeRequired();
});

test('Email input should be type email and required', () => {
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toHaveAttribute('type', 'email');
  expect(emailInput).toBeRequired();
});

test('Comment textarea should have correct placeholder', () => {
  const commentTextarea = screen.getByLabelText(/special requests/i);
  expect(commentTextarea.tagName).toBe('TEXTAREA');
  expect(commentTextarea).toHaveAttribute(
    'placeholder',
    'Let us know if you have any special requests'
  );
});

const setup = () => {
  const mockOnSubmit = jest.fn();
  const mockDispatch = jest.fn();

  render(<BookingForm onSubmit={mockOnSubmit} dispatch={mockDispatch} />);

  return { mockOnSubmit };
};

test('Guests field accepts valid input and rejects invalid', () => {
  setup();
  const guestsInput = screen.getByLabelText(/number of guests/i);

  // Valid
  fireEvent.change(guestsInput, { target: { value: '4' } });
  expect(guestsInput).toBeValid();

  // Invalid: Below min
  fireEvent.change(guestsInput, { target: { value: '0' } });
  expect(guestsInput).toBeInvalid();

  // Invalid: Above max
  fireEvent.change(guestsInput, { target: { value: '11' } });
  expect(guestsInput).toBeInvalid();
});


test('Email field validates correct and incorrect input', () => {
  setup();
  const emailInput = screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
  expect(emailInput).toBeInvalid();

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput).toBeValid();
});

test('First and last name fields are required', () => {
  setup();
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);

  // Invalid: empty
  fireEvent.change(firstName, { target: { value: '' } });
  fireEvent.change(lastName, { target: { value: '' } });

  expect(firstName).toBeInvalid();
  expect(lastName).toBeInvalid();

  // Valid
  fireEvent.change(firstName, { target: { value: 'Alice' } });
  fireEvent.change(lastName, { target: { value: 'Smith' } });

  expect(firstName).toBeValid();
  expect(lastName).toBeValid();
});


