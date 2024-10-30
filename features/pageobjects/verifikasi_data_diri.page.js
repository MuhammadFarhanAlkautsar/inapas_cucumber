const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiDataDiriPage {
  
  /**
   * define selectors using getter methods
   */
  get btnVerifikasiOnline() {
    return $(
      "~Verifikasi Online\nDilakukan secara online menggunakan foto biometrik wajah."
    );
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get btnKeluar() {
    return $("~Keluar");
  }

  get btnBatal() {
    return $("~Batal");
  }

  get popupKeluar() {
    return $("~Keluar dari halaman ?\nApakah Anda yakin untuk keluar dari halaman ini?");
  }

  get textVerifikasiDataDiri() {
    return $("~Verifikasi Data Diri");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickVerifikasiOnline() {
    await this.btnVerifikasiOnline.click();
  }

  async clickKembali() {
    await this.btnKembali.click();
  }

  async clickKeluar() {
    await this.btnKeluar.click();
  }

  async clickBatal() {
    await this.btnBatal.click();
  }

  async isVerifikasiDataDiriScreenVisible() {
    return await browser.waitUntil(
      async () => {
        return await this.textVerifikasiDataDiri.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Verifikasi Data Diri Screen tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }
}

module.exports = new VerifikasiDataDiriPage();
