import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload File', () => {
  test('should allow to upload a file', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');
    
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('.mb-3').nth(1).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, '../test-data/Book1.xlsx'));
    await page.getByTestId('file-submit').click();
    expect(await page.locator('h1').textContent()).toEqual('File Uploaded!');
  })
})