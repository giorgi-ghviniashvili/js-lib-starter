/* eslint-disable no-undef */
import {Chart, utils} from "../src";

describe('Testing Library', () => {
  const chart = new Chart();

  it('Renders correctly', () => {
    expect(chart.render()).toBe('hey');
  });

  it('Adds numbers correctly', () => {
    expect(utils.add(1, 1)).toBe(2);
  })

});