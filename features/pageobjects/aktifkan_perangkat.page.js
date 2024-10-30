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

  get inputINApasID() {
    return $("//android.widget.EditText");
  }

  get btnLanjut() {
    return $("~Lanjut");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async aktifkanPerangkat(inapasid) {
    await this.inputINApasID.setValue(inapasid);
    await this.btnLanjut.click();
  }

  async isAktifkanPerangkat() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.titleAktifkanPerangkat.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Title Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }

  async isTextAktifkanPerangkat() {
    const isVisible = await browser.waitUntil(
      async () => {
        return await this.textAktifkanPerangkat.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Text Aktifkan Perangkat tidak muncul dalam batas waktu yang ditentukan",
      }
    );
    return isVisible;
  }
}

module.exports = new AktifkanPerangkatPage();
