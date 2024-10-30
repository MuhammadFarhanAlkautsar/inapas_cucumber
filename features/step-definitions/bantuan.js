const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, driver } = require('@wdio/globals')

const SplashPage = require('../pageobjects/splash.page');
const BantuanPage = require('../pageobjects/bantuan.page');

Given('User is on the Pusat Bantuan screen', async () => {
  const isPusatBantuanScreen = await BantuanPage.isPusatBantuan();
  
  if (!isPusatBantuanScreen) {
    console.log("Navigating to Pusat Bantuan screen...");
    await SplashPage.clickBantuan(); // Fungsi untuk menavigasi ke layar Pusat Bantuan
  }
  
  // Verifikasi bahwa kita berada di layar Pusat Bantuan setelah navigasi
  await expect(isPusatBantuanScreen).toBe(true);
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

Then("User should see the {string} Screen", async (screen) => {
  if (screen === "Linkedin") {
    const isLinkedinScreen = await BantuanPage.isLinkedinScreen();
    await expect(isLinkedinScreen).toBe(true);

    const isUrlLinkedin = await BantuanPage.isUrlLinkedinINAdigital();
    await expect(isUrlLinkedin).toBe(true);
  } else if (screen === "Facebook") {
    const isFacebookScreen = await BantuanPage.isFacebookScreen();
    await expect(isFacebookScreen).toBe(true);

    const isUrlFacebookINAdigital = await BantuanPage.isUrlFacebookINAdigital();
    await expect(isUrlFacebookINAdigital).toBe(true);
  } else if (screen === "Youtube") {
    const isYoutubeScreen = await BantuanPage.isYoutubeScreen();
    await expect(isYoutubeScreen).toBe(true);

    const isYoutubeINAdigital = await BantuanPage.isYoutubeINAdigital();
    await expect(isYoutubeINAdigital).toBe(true);
  } else if (screen === "Twitter") {
    const isTwitterScreen = await BantuanPage.isTwitterScreen();
    await expect(isTwitterScreen).toBe(true);

    const isUrlTwitterINAdigital = await BantuanPage.isUrlTwitterINAdigital();
    await expect(isUrlTwitterINAdigital).toBe(true);
  } else if (screen === "Browser") {
    const isBrowserScreen = await BantuanPage.isBrowserScreen();
    await expect(isBrowserScreen).toBe(true);

    const isUrlBrowserINAdigital = await BantuanPage.isUrlBrowserINAdigital();
    await expect(isUrlBrowserINAdigital).toBe(true);
  } else if (screen === "Form Aduan") {
    const isFormulirAduanScreen = await BantuanPage.isFormulirAduanScreen();
    await expect(isFormulirAduanScreen).toBe(true);
  } else if (screen === "FAQ") {
    const isFAQScreen = await BantuanPage.isFAQScreen();
    await expect(isFAQScreen).toBe(true);
  } else if (screen === "Hapus Akun") {
    // await expect(SplashPage.icBantuan).toBeDisplayed();
  } else if (screen === "Pusat Bantuan") {
    const isPusatBantuanScreen = await BantuanPage.isPusatBantuan();
    await expect(isPusatBantuanScreen).toBe(true);
  } 
});


