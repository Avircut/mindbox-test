import { rest } from 'msw';

export const msw = {
  handlers: {
    outlay: rest.get(`${__API__}/list`, (req, res, ctx) => {
      return res(
        ctx.json([
        ]),
      );
    }),
  },
};
