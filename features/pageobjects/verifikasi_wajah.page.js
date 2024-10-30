const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiWajahPage {
  
  /**
   * define selectors using getter methods
   */
  get btnFotoWajah() {
    return $("~Foto Wajah");
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get popupKeluar() {
    return $("~Keluar dari halaman ?\nApakah Anda yakin untuk keluar dari halaman ini?");
  }

  get btnKeluar() {
    return $("~Keluar");
  }

  get btnBatal() {
    return $("~Batal");
  }

  get titleVerifikasiWajah() {
    return $("~Verifikasi Wajah");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickFotoWajah() {
    await this.fotoWajahButton.click();
    return fotoWajahPage;
  }

  async isVerifikasiWajahScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleVerifikasiWajah.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Verifikasi Wajah tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return splashPage;
  }
}

module.exports = new VerifikasiWajahPage();
