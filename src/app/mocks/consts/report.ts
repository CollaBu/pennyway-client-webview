import { feeds } from './feed';

interface Reports {
  [feedId: keyof typeof feeds]: boolean;
}

export const reports: Reports = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
};
