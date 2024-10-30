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
    return $('//android.webkit.WebView');
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
    try {
      await browser.waitUntil(
        async () => await this.textPusatBantuan.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Text Pusat Bantuan tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isPusatBantuanScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
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
    try {
      await browser.waitUntil(async () => await this.screenFAQ.isDisplayed(), {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman FAQ tidak muncul dalam batas waktu yang ditentukan",
      });
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isFAQScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isLinkedinScreen() {
    try {
      await browser.waitUntil(
        async () => {
          const linkedinText = await this.linkedinINAdigital.getText();
          return linkedinText.includes("INA DIGITAL | LinkedIn") || linkedinText.includes("Daftar | LinkedIn"); 
        },
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Screen Profile LinkedIn INApas tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isLinkedinScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isUrlLinkedinINAdigital() {
    try {
      await browser.waitUntil(
        async () => {
          const link = await this.screenWebview.getText();
        return link.includes("linkedin.com");
        },
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Elemen Link Linkedin tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isUrlLinkedinINAdigital:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isFacebookScreen() {
    try {
      await browser.waitUntil(
        async () => await this.facebookScreen.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Screen Profile Facebook INA digital tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isFacebookScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isUrlFacebookINAdigital() {
    try {
      await browser.waitUntil(
        async () => {
          const link = await this.screenWebview.getText();
        return link.includes("m.facebook.com");
        },
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Elemen Link Facebook tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isUrlFacebookINAdigital:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isYoutubeScreen() {
    try {
      await browser.waitUntil(
        async () => await this.youtubeScreen.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Screen Profile Youtube INA digital tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isYoutubeScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
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
    try {
      await browser.waitUntil(
        async () => await this.twitterScreen.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Screen Profile Twitter INA digital tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isTwitterScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isUrlTwitterINAdigital() {
    try {
      await browser.waitUntil(
        async () => {
          const link = await this.screenWebview.getText();
        return link.includes("x.com");
        },
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Elemen Link Twitter tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isUrlTwitterINAdigital:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isBrowserScreen() {
    try {
      await browser.waitUntil(
        async () => await this.browserScreen.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Screen Profile Browser INA digital tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isBrowserScreen:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isUrlBrowserINAdigital() {
    try {
      await browser.waitUntil(
        async () => {
          const link = await this.screenWebview.getText();
        return link.includes("inadigital.co.id");
        },
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Elemen Link Browser tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isUrlBrowserINAdigital:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }
}

module.exports = new BantuanPage();
