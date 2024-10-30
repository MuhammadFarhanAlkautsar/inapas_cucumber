const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BantuanPage {
  /**
   * define selectors using getter methods
   */
  get textPusatBantuan() {
    return $("~Pusat Bantuan");
  }

  get btnFormulirAduan() {
    return $(
      "~Formulir Aduan\nKirimkan kendala Anda melalui Formulir Aduan ke INApas Support."
    );
  }

  get btnFAQ() {
    return $(
      "~FAQ\nTemukan jawaban dari berbagai pertanyaan Anda seputar INApas."
    );
  }

  get btnHapusAkun() {
    return $(
      "~Hapus Akun INApas\nDengan menghapus akun, Anda akan kehilangan akses ke seluruh layanan INApas."
    );
  }

  get btnTutupTab() {
    return $("~Tutup tab");
  }

  get icLinkedin() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[4]'
    );
  }

  get icFacebook() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[5]'
    );
  }

  get icYoutube() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[6]'
    );
  }

  get icTwitter() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[7]'
    );
  }

  get icBrowser() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.ImageView[8]'
    );
  }

  get screenWebview() {
    return $(
      '//android.widget.TextView[@resource-id="com.android.chrome:id/url_bar"]'
    );
  }

  get screenFormulirAduan() {
    return $(
      '//android.widget.TextView[@text="Formulir Pelaporan Masalah INApas"]'
    );
  }

  get screenFAQ() {
    return $(
      '//android.widget.TextView[@text="Pertanyaan yang Sering Diajukan (FAQ)"]'
    );
  }

  get linkedinINAdigital() {
    return $('//android.webkit.WebView[@text="INA DIGITAL | LinkedIn"]');
  }

  get facebookScreen() {
    return $(
      '//android.view.View[@text="Lihat lebih banyak dari INA DIGITAL"]'
    );
  }

  get youtubeScreen() {
    return $(
      '//android.view.ViewGroup[@resource-id="com.google.android.youtube:id/navigation_bar_divider_frame"]'
    );
  }

  get youtubeINAdigital() {
    return $("~Subscribe ke INA Digital.");
  }

  get twitterScreen() {
    return $('//android.webkit.WebView[@text="Masuk ke X / X"]');
  }

  get browserScreen() {
    return $('//android.webkit.WebView[@text="INA DIGITAL"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async clickTutupTab() {
    await this.btnTutupTab.click();
  }

  async clickFormulirAduan() {
    await this.btnFormulirAduan.click();
  }

  async clickFAQ() {
    await this.btnFAQ.click();
  }

  async clickHapusAkun() {
    await this.btnHapusAkun.click();
  }

  async clickLinkedin() {
    await this.icLinkedin.click();
  }

  async clickFacebook() {
    await this.icFacebook.click();
  }

  async clickYoutube() {
    await this.icYoutube.click();
  }

  async clickTwitter() {
    await this.icTwitter.click();
  }

  async clickBrowser() {
    await this.icBrowser.click();
  }

  async isPusatBantuan() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.textPusatBantuan.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Text Pusat Bantuan tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isPusatBantuan() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.textPusatBantuan.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Text Pusat Bantuan tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isFormulirAduanScreen() {
    try {
      await browser.waitUntil(
        async () => await this.screenFormulirAduan.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Halaman Formulir Aduan tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isFormulirAduanScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isFAQScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return this.screenFAQ.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Formulir Aduan tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isLinkedinScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.linkedinINAdigital.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Linkedin INApas tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isUrlLinkedinINAdigital() {
    const isUrl = await browser.waitUntil(
      async () => {
        const link = await this.screenWebview.getText();
        return link === "linkedin.com";
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 20 detik
        timeoutMsg:
          "Elemen Link Linkedin tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isUrl;
  }

  async isFacebookScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.facebookScreen.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Linkedin INApas tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isUrlFacebookINAdigital() {
    const isUrl = await browser.waitUntil(
      async () => {
        const link = await this.screenWebview.getText();
        return link === "m.facebook.com";
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 20 detik
        timeoutMsg:
          "Elemen Link Facebook tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isUrl;
  }

  async isYoutubeScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.youtubeScreen.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Linkedin INApas tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isYoutubeINAdigital() {
    const isYoutube = await browser.waitUntil(
      async () => {
        return await this.youtubeINAdigital.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Youtube INAdigital tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isYoutube;
  }

  async isTwitterScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.twitterScreen.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Linkedin INApas tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isUrlTwitterINAdigital() {
    const isUrl = await browser.waitUntil(
      async () => {
        const link = await this.screenWebview.getText();
        return link === "x.com";
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 20 detik
        timeoutMsg:
          "Elemen Link Twitter tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isUrl;
  }

  async isBrowserScreen() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.browserScreen.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Screen Profile Browser INApas tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isUrlBrowserINAdigital() {
    const isUrl = await browser.waitUntil(
      async () => {
        const link = await this.screenWebview.getText();
        return link === "inadigital.co.id";
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 20 detik
        timeoutMsg:
          "Elemen Link Browser tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isUrl;
  }
}

module.exports = new BantuanPage();
