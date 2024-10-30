const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AktifkanPerangkatPage {
  /**
   * define selectors using getter methods
   */
  get titleAktifkanPerangkat() {
    return $("~Aktifkan Perangkat");
  }

  get textAktifkanPerangkat() {
    return $(
      "~Mohon lengkapi data berikut ini menggunakan data yang valid untuk melakukan menyiapkan INApas"
    );
  }

  get fieldINApasID() {
    return $("//android.widget.EditText");
  }

  get btnLanjut() {
    return $("~Lanjut");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async inputINApasID(inapasid) {
    await this.fieldINApasID.setValue(inapasid);
    await this.btnLanjut.click();
  }

  async isAktifkanPerangkat() {
    try {
      await browser.waitUntil(
        async () => await this.titleAktifkanPerangkat.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Title Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isAktifkanPerangkat:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }

  async isTextAktifkanPerangkat() {
    try {
      await browser.waitUntil(
        async () => await this.textAktifkanPerangkat.isDisplayed(),
        {
          timeout: 5000, // Timeout maksimal, misalnya 5 detik
          timeoutMsg:
            "Text Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan",
        }
      );
      return true; // Mengembalikan true jika elemen terlihat
    } catch (error) {
      console.warn("Warning in isTextAktifkanPerangkat:", error.message);
      return false; // Mengembalikan false jika elemen tidak ditemukan
    }
  }
}

module.exports = new AktifkanPerangkatPage();
