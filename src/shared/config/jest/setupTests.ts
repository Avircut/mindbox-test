import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import {
  fetch, Headers, Request, Response,
} from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockData } from './mockData';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(`${__API__}/list`, (_req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
  rest.post(`${__API__}/create`, (_req, res, ctx) => {
    return res(ctx.json(_req.bodyUsed));
  }),
  rest.put(`${__API__}/*/update`, (_req, res, ctx) => {
    return res(ctx.json(_req.bodyUsed));
  }),
  rest.delete(`${__API__}/*/delete`, (_req, res, ctx) => {
    return res(ctx.json(_req.bodyUsed));
  }),
];

export const server = setupServer(...handlers);

// Enable the API mocking before tests.
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  server.listen();
});

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(() => server.close());
