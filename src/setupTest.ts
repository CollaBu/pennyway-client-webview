import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// add jest-dom matchers
expect.extend(matchers);
