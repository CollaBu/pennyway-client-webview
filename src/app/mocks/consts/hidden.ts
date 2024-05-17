import { feeds } from './feed';

interface Hiddens {
  [feedId: keyof typeof feeds]: boolean;
}

export const hiddens: Hiddens = {
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
