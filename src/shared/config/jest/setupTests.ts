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
  rest.get(`${__API__}/todos`, (_req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
  rest.post(`${__API__}/login`, (_req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        username: 'admin',
        password: '123',
        avatar:
          // eslint-disable-next-line max-len
          'https://sun27-1.userapi.com/s/v1/ig2/wi5o_w0R9_NC5nNp_7LxI8cZlUtm64kQ4PL5cpXrdw-7YFjF2BKnjiNV16rJiGBnvEId9NiNgieePJPOVzXMARIT.jpg?size=144x144&quality=95&crop=330,278,144,144&ava=1',
      }),
    );
  }),
  rest.post(`${__API__}/todos`, (_req, res, ctx) => {
    return res(ctx.json(_req.bodyUsed));
  }),
  rest.put(`${__API__}/todos/*`, (_req, res, ctx) => {
    return res(ctx.json(_req.bodyUsed));
  }),
  rest.delete(`${__API__}/todos/*`, (_req, res, ctx) => {
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
