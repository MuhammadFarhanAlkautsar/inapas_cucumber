const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, driver } = require('@wdio/globals')

const BantuanPage = require('../pageobjects/bantuan.page');

Given('User is on the Pusat Bantuan screen', async () => {
  await expect(BantuanPage.isPusatBantuan()).resolves.toBe(true);
});

When('User click on the {string} button', async (buttonText) => {
    if (buttonText === "Form Aduan") {
        await BantuanPage.clickFormulirAduan();
      } else if (buttonText === "FAQ") {
        await BantuanPage.clickFAQ();
      } else if (buttonText === "Hapus Akun") {
        await BantuanPage.clickHapusAkun();
      } else if (buttonText === "Tutup Tab") {
        await BantuanPage.clickTutupTab();
      }
});

When('User click on the back button 2 times', async () => {
  await driver.back();
  await driver.back();
});

When("User click on the {string} icon", async (icon) => {
  if (icon === "Linkedin") {
    await BantuanPage.clickLinkedin();
  } else if (icon === "Facebook") {
    await BantuanPage.clickFacebook();
  } else if (icon === "Youtube") {
    await BantuanPage.clickYoutube();
  } else if (icon === "Twitter") {
    await BantuanPage.clickTwitter();
  } else if (icon === "Browser") {
    await BantuanPage.clickBrowser();
  }
});

Then("User should see the {string} Screen", async (icon) => {
  if (icon === "Linkedin") {
    await expect(BantuanPage.isLinkedinScreen()).toBe(true);
    await expect(BantuanPage.isUrlLinkedinINAdigital()).toBe(true);
  } else if (icon === "Facebook") {
    await expect(BantuanPage.isFacebookScreen()).toBe(true);
    await expect(BantuanPage.isUrlFacebookINAdigital()).toBe(true);
  } else if (icon === "Youtube") {
    await expect(BantuanPage.isYoutubeScreen()).toBe(true);
    await expect(BantuanPage.isYoutubeINAdigital()).toBe(true);
  } else if (icon === "Twitter") {
    await expect(BantuanPage.isTwitterScreen()).toBe(true);
    await expect(BantuanPage.isUrlTwitterINAdigital()).toBe(true);
  } else if (icon === "Browser") {
    await expect(BantuanPage.isBrowserScreen()).toBe(true);
    await expect(BantuanPage.isUrlBrowserINAdigital()).toBe(true);
  } else if (icon === "FAQ") {
    await expect(BantuanPage.isFAQScreen()).toBe(true);
  } else if (icon === "Hapus Akun") {
    // await expect(SplashPage.icBantuan).toBeDisplayed();
  } else if (icon === "Pusat Bantuan") {
    await expect(BantuanPage.isPusatBantuan()).toBe(true);
  } else if (icon === "Form Aduan") {
    const isFormulirAduanScreen = await BantuanPage.isFormulirAduanScreen();
    await expect(isFormulirAduanScreen).toBe(true);
  }
});


