// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

// The last line is commented out because it causes a Typescript error.
// src/setupTests.ts:24:1 - error TS2322: Type 'undefined' is not assignable to type '{ new (): XMLHttpRequest; prototype: XMLHttpRequest; readonly DONE: number; readonly HEADERS_RECEIVED: number; readonly LOADING: number; readonly OPENED: number; readonly UNSENT: number; }'.

// Evaluate reenabling if needed.
// global.XMLHttpRequest = undefined;
