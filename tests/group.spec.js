import { test, expect } from '@playwright/test';

test.describe('personalDetails', async () => {
    test('personal', async () => {
        console.log('personal detail form');
    });

    test('education', async () => {
        console.log('education detail form');
    });

    test('experience', async () => {
        console.log('experience detail form');
    });
});

test.describe('others', async () => {
    test('banking', async () => {
        console.log('banking detail form');
    });

    test('termsAndCondition', async () => {
        console.log('termsAndCondition detail form');
    });
});
