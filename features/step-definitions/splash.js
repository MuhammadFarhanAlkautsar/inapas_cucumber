const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const SplashPage = require('../pageobjects/splash.page');
const verifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const aktifkanPerangkatPage = require('../pageobjects/aktifkan_perangkat.page');
const bantuanPage = require('../pageobjects/bantuan.page');

// Given('User on the splash screen', async () => {
//     await expect(SplashPage.isSplashScreenVisible()).toBe(true);
// });

// Then("User should see the {string} button", async (buttonText) => {
//   if (buttonText === "Mulai Verifikasi") {
//     await expect(SplashPage.btnMulaiVerifikasi).toBeDisplayed();
//   } else if (buttonText === "Aktifkan Perangkat") {
//     await expect(SplashPage.btnAktifkanPerangkat).toBeDisplayed();
//   } else if (buttonText === "Bantuan") {
//     await expect(SplashPage.icBantuan).toBeDisplayed();
//   }
// });

// When("User click on the {string} button", async (buttonText) => {
//   if (buttonText === "Mulai Verifikasi") {
//     await SplashPage.clickMulaiVerifikasi();
//   } else if (buttonText === "Aktifkan Perangkat") {
//     await SplashPage.clickAktifkanPerangkat();
//   } else if (buttonText === "Bantuan") {
//     await SplashPage.clickBantuan();
//   }
// });

// Then("User should navigate to the verification screen", async () => {
//   const isVisible = await verifikasiDataDiriPage.isVerifikasiDataDiriScreenVisible();
//   await expect(isVisible).toBe(true);
// });

// Then("User should navigate to the Aktifkan Perangkat Screen", async () => {
//   await expect(aktifkanPerangkatPage.isAktifkanPerangkat()).toBe(true);
// });

// Then("User should see the Pusat Bantuan Screen", async () => {
//   await expect(bantuanPage.isPusatBantuan()).toBe(true);
// });

