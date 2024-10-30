const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const SplashPage = require('../pageobjects/splash.page');
const verifikasiDataDiriPage = require('../pageobjects/verifikasi_data_diri.page');
const aktifkanPerangkatPage = require('../pageobjects/aktifkan_perangkat.page');
const BantuanPage = require('../pageobjects/bantuan.page');

Given('User on the splash screen', async () => {
  //Button Mulai Verifikasi
  const isMulaiVerifikasiButton = await SplashPage.btnMulaiVerifikasi.isDisplayed();
  await expect(isMulaiVerifikasiButton).toBe(true);

  //Button Aktifkan Perangkat
  const isAktifkanPerangkatButton = await SplashPage.btnAktifkanPerangkat.isDisplayed();
  await expect(isAktifkanPerangkatButton).toBe(true);
  
  //Button Pusat Bantuan
  const isPusatBantuanButton = await SplashPage.icBantuan.isDisplayed();
  await expect(isPusatBantuanButton).toBe(true);

  //Text Splash Screen
  const isSplashScreen = await SplashPage.isSplashScreenVisible();
  await expect(isSplashScreen).toBe(true);
});

When("User click on the {string} button", async (buttonText) => {
  if (buttonText === "Mulai Verifikasi") {
    await SplashPage.clickMulaiVerifikasi();
  } else if (buttonText === "Aktifkan Perangkat") {
    await SplashPage.clickAktifkanPerangkat();
  } else if (buttonText === "Pusat Bantuan") {
    await SplashPage.clickBantuan();
  }
});

Then("User should navigate to the {string} screen", async (screen) => {
  if (screen === "Verifikasi Data Diri") {
    const isVerifikasiDataDiriScreen = await verifikasiDataDiriPage.isVerifikasiDataDiriScreenVisible();
    await expect(isVerifikasiDataDiriScreen).toBe(true);
  } else if (screen === "Aktifkan Perangkat") {
    const isAktifkanPerangkatScreen = await aktifkanPerangkatPage.isAktifkanPerangkat();
    await expect(isAktifkanPerangkatScreen).toBe(true);
  } else if (screen === "Pusat Bantuan") {
    const isPusatBantuanScreen = await BantuanPage.isPusatBantuan();
    await expect(isPusatBantuanScreen).toBe(true);
  }
});

