const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiAksesPage {
  
  /**
   * define selectors using getter methods
   */
  get btnPIN() {
    return $(
      "~PIN\nMasukkan 6 digit PIN INApas anda untuk verifikasi"
    );
  }

  get btnEmail() {
    return $(
      "~Email\nKode OTP akan dikirimkan ke alamat email"
    );
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get titleVerifikasiAkses() {
    return $("~Verifikasi Akses Anda");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickAksesPIN() {
    await this.btnVerifikasiOnline.click();
  }

  async clickAksesEmail() {
    await this.btnKembali.click();
  }

  async clickKembali() {
    await this.btnKeluar.click();
  }

  async isVerifikasiAksesScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleVerifikasiAkses.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Verifikasi Akses tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }
}

module.exports = new VerifikasiAksesPage();
