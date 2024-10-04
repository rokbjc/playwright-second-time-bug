import { expect, test } from '@playwright/test';
import { envTest }  from 'lib/src/env';

envTest();

test('test', async () => {
  expect(true).toBe(true);
});
