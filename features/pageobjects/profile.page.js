const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage {
  /**
   * define selectors using getter methods
   */
  get qrProfile() {
    return $("//android.widget.ScrollView/android.widget.ImageView[2]");
  }

  get popupQrProfile() {
    return $("~QR Face Anda\nKembali");
  }

  get Nama() {
    return $("(//android.view.View[contains(@content-desc, 'Nama')])[1]");
  }

  get btnEyeShowHide() {
    return $("//android.widget.ScrollView/android.widget.Button[1]");
  }

  get INApasID() {
    return $("(//android.view.View[contains(@content-desc, 'INApas ID')])[5]");
  }

  get NIK() {
    return $("(//android.view.View[contains(@content-desc, 'INApas ID')])[9]");
  }

  get Email() {
    return $("(//android.view.View[contains(@content-desc, 'INApas ID')])[11]");
  }

  get Phone() {
    return $("(//android.view.View[contains(@content-desc, 'INApas ID')])[13]");
  }

  get btnUbahPIN() {
    return $("~Ubah PIN");
  }

  get btnLupaPIN() {
    return $("~Ubah PIN");
  }

  get batalkan() {
    return $("~Batalkan");
  }

  get keluar() {
    return $("~Keluar");
  }

  get btnCekSertifikat() {
    return $("~Cek Sertifikat Anda");
  }

  get popupSertifikat() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View'
    );
  }

  get popupKeluar() {
    return $(
      "~Keluar dari Perangkat?\nPerangkat ini akan dihapus dari akun Anda. Anda akan diminta untuk melakukan login kembali dan verifikasi saat mengakses INApas dari perangkat ini di masa mendatang."
    );
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get btnKebijakanPrivasi() {
    return $("~Kebijakan Privasi");
  }

  get btnKeluarPerangkat() {
    return $("~Keluar dari perangkat");
  }

  get msgKeluarPerangkat() {
    return $(
      '//android.view.View[@content-desc="Tekan lama untuk keluar dari perangkat"]/android.view.View/android.view.View'
    );
  }

  get btnCopyINApasID() {
    return $("//android.widget.ScrollView/android.widget.Button[2]");
  }

  get msgCopySuccess() {
    return $(
      '//android.view.View[@content-desc="INApas ID berhasil disalin."]/android.view.View/android.view.View'
    );
  }

  get INApas() {
    return $(
      '//android.widget.TextView[@resource-id="oplus:id/resolver_item_name" and @text="INA Pas"]'
    );
  }

  get kebijakanPrivasiScreen() {
    return $('//android.webkit.WebView[@text="Kebijakan Privasi | INApas"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickEyeShowHide() {
    await this.btnEyeShowHide.click();
  }

  async clickCopyINApasID() {
    await this.btnCopyINApasID.click();
  }

  async clickQRprofile() {
    await this.qrProfile.click();
  }

  async clickUbahPIN() {
    await this.btnUbahPIN.click();
  }

  async clickLupaPIN() {
    await this.btnLupaPIN.click();
  }

  async clickCekSertifikat() {
    await this.btnCekSertifikat.click();
  }

  async clickKebijakanPrivasi() {
    await this.btnKebijakanPrivasi.click();
  }

  async clickKeluarPerangkat() {
    await this.btnKeluarPerangkat.click();
  }

  async longclickKeluarPerangkat() {
    await driver.executeScript("mobile: longClickGesture", [
      {
        elementId: await this.btnKeluarPerangkat.elementId,
        duration: 3000,
      },
    ]);
  }

  async isSertifikatScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.popupSertifikat.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "PopUp Sertifikat tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isQRprofileScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.popupQrProfile.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "PopUp QR Profile tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isCopySucces() {
    return await browser.waitUntil(
      async () => {
        return await this.msgCopySuccess.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Pesan Copy INApas ID tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }
}

module.exports = new ProfilePage();
