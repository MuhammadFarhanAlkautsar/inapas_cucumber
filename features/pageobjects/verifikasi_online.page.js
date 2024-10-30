const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiOnlinePage {
  
  /**
   * define selectors using getter methods
   */
  get btnFormInput() {
    return $(
      "~Form Input\nLakukan pengisian data secara manual untuk diverifikasi."
    );
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get titleVerifikasiOnline() {
    return $("~Verifikasi Online");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickFormInputButton() {
    await this.btnFormInput.click();
    return DataDiriPage;
  }

  async clickKembali() {
    await this.btnKembali.click();
    return verifikasiDataDiriPage;
  }
}

module.exports = new VerifikasiOnlinePage();
