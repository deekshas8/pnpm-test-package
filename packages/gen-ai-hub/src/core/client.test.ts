import { returnHelloWorld } from './client.js';
describe('http-client', () => {
  it('should return string', () => {
    expect(returnHelloWorld()).toBe('Hello World from gen-ai-hub!');
  });
});