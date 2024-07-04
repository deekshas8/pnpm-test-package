import { printHelloWorld } from './api.js';
describe('http-client', () => {
  it('should return string', () => {
    expect(printHelloWorld()).toHaveReturnedWith();
  });
});