import {test,expect} from '@playwright/test'

test("test one @reg", () => {
    console.log("test one executed successfully");
})

test("test two @smoke", () => {
    console.log("test two executed successfully");
})

test("test three @smoke", () => {
    console.log("test three executed successfully");
})

test("test four @reg @smoke", () => {
    console.log("test four executed successfully");
})

test("test five @reg", () => {
    console.log("test five executed successfully");
})
