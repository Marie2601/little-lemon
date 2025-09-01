import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './Main';


test('Renders the BookingForm heading', () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  render(<BookingForm availableTimes={mockAvailableTimes} />);
  const headingElement = screen.getByText("Book your table here");
  expect(headingElement).toBeInTheDocument();
});

test('should return the correct array of time strings', () => {
  const { initializeTimes } = require('./Main.js');
  const times = initializeTimes();
  expect(times).toEqual([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
});

describe('initializeTimes', () => {
  test('should return the correct array of time strings', () => {
    const times = initializeTimes();
    expect(times).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });
});

describe('updateTimes', () => {
  test('should return initialized times if action type is UPDATE_TIMES', () => {
    const state = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', date: '2025-08-30' };
    const newState = updateTimes(state, action);

    expect(newState).toEqual(initializeTimes());
  });

  test('should return the same state if action type is unknown', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = updateTimes(state, action);

    expect(newState).toEqual(state);
  });
});

