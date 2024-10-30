const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FotoWajahPage {
  /**
   * define selectors using getter methods
   */
  get btnKembali() {
    return $('//android.widget.Button');
  }

  get textHadapkanWajah() {
    return $('//android.widget.TextView[@text="Hadapkan wajah ke kamera"]');
  }

  get fotoWajah() {
    return $('android=new UiSelector().className("android.view.ViewGroup")');
  }

  get msgVerifikasiWajahBerhasil() {
    return $("~Verifikasi Wajah Berhasil\nMohon menunggu untuk masuk ke proses selanjutnya.");
  }

  get msgVerifikasiWajahGagal() {
    return $("~Terjadi kesalahan\nSorry, your details don't match. Please check and try again or contact Dukcapil for help.\nOK");
  }

  get msgLivenessGagal() {
    return $("~Terjadi kesalahan\nPengecekan liveness tidak berhasil, wajah tidak terdeteksi dengan baik\nOK");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async clickKembali() {
    await this.btnKembali.click();
  }

  async isHadapkanWajah() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.textHadapkanWajah.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Text Hadapkan Wajah tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isVerifikasiWajahBerhasil() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.msgVerifikasiWajahBerhasil.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Pop Up Verifikasi Wajah Berhasil tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isVerifikasiWajahGagal() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.msgVerifikasiWajahGagal.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Pop Up Verifikasi Wajah Gagal tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isLivenessGagal() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.msgLivenessGagal.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Pop Up Verifikasi Wajah Gagal tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }
}

module.exports = new FotoWajahPage();
