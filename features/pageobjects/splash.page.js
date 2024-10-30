const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SplashPage {
  /**
   * define selectors using getter methods
   */
  get btnMulaiVerifikasi() {
    return $("~Mulai Verifikasi");
  }

  get btnAktifkanPerangkat() {
    return $("~Aktifkan Perangkat");
  }

  get btnLogin() {
    return $("~Login");
  }

  get icBantuan() {
    return $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]'
    );
  }

  get popupMelanjutkanOnBoarding() {
    return $(
      "~Melanjutkan Onboarding\nApakah Anda ingin melanjutkan proses penyiapan INApas??"
    );
  }

  get popupMenggantiOnBoardingPopUp() {
    return $(
      "~Mengganti Onboarding?\nApakah Anda ingin mengganti jenis onboarding INApas Anda?"
    );
  }

  get btnLanjutkan() {
    return $("~Lanjutkan");
  }

  get textAuthenticationRequired() {
    return $(
      '//android.widget.TextView[@resource-id="com.android.systemui:id/title"]'
    );
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get btnMulaiKembali() {
    return $("~Mulai Kembali");
  }

  get textSplash() {
    return $("~Kunci untuk mengakses berbagai layanan dalam genggaman.");
  }

  get popupError() {
    return $("~Terjadi kesalahan\nMohon coba lagi\nOK");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async clickMulaiVerifikasi() {
    await this.btnMulaiVerifikasi.click();
  }

  async clickAktifkanPerangkat() {
    await this.btnAktifkanPerangkat.click();
  }

  async clickBantuan() {
    await this.icBantuan.click();
  }

  async clickLanjutkan() {
    await this.btnLanjutkan.click();
  }

  async clickMulaiKembali() {
    await this.btnMulaiKembali.click();
    // return verifikasiDataDiriPage;
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async isSplashScreenVisible() {
    return await browser.waitUntil(
      async () => {
        return await this.textSplash.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 10 detik
        timeoutMsg: "Halaman Splash Screen tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }
  

  // Fungsi untuk mengecek apakah popup error muncul, lalu handle back dan retry
  async handlePopupErrorAndRetry(action, maxRetries = 5) {
    let retries = 0;
    let isPopupErrorVisible = false;

    // Lakukan proses verifikasi dengan loop untuk retries
    do {
      // Coba klik tombol yang diberikan dalam parameter (misalnya clickMulaiVerifikasi)
      await action();

      // Cek apakah popup error muncul
      isPopupErrorVisible = await this.popupError
        .isDisplayed()
        .catch(() => false);

      if (isPopupErrorVisible) {
        // Jika popup error muncul, klik browser back dan retry
        await browser.back();

        retries++;
      }
    } while (isPopupErrorVisible && retries < maxRetries);

    if (retries === maxRetries && isPopupErrorVisible) {
      throw new Error(
        `Max retries (${maxRetries}) reached. Popup error still visible.`
      );
    }
  }

  async activateAppByVersion(version) {
    let appPackage;

    // Menentukan package name berdasarkan versi yang diberikan
    switch (version) {
      case "dev":
        appPackage = "id.co.peruri.inapass.dev"; // Package untuk dev
        break;
      case "stg":
        appPackage = "id.co.peruri.inapass.stg"; // Package untuk staging
        break;
      case "beta":
        appPackage = "id.co.peruri.inapass"; // Package untuk beta
        break;
      default:
        throw new Error(`Versi aplikasi "${version}" tidak valid!`);
    }

    // Mengaktifkan aplikasi dengan package name yang dipilih
    await driver.activateApp(appPackage);
  }

  async terminateAppByVersion(version) {
    let appPackage;

    // Menentukan package name berdasarkan versi yang diberikan
    switch (version) {
      case "dev":
        appPackage = "id.co.peruri.inapass.dev"; // Package untuk dev
        break;
      case "stg":
        appPackage = "id.co.peruri.inapass.stg"; // Package untuk staging
        break;
      case "beta":
        appPackage = "id.co.peruri.inapass"; // Package untuk beta
        break;
      default:
        throw new Error(`Versi aplikasi "${version}" tidak valid!`);
    }

    // Menghentikan aplikasi dengan package name yang dipilih
    await driver.terminateApp(appPackage);
  }
}

module.exports = new SplashPage();
