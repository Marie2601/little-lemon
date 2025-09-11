import { updateTimes, initializeTimes } from './Main';
import { fetchAPI } from './api';

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

