const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiWajahPage {
  /**
   * define selectors using getter methods
   */
  get btnKembali() {
    return $("~Kembali");
  }

  get titleAktifkanPin() {
    return $("~Aktifkan PIN INApas");
  }

  get titleBuatPin() {
    return $("~Buat PIN INApas");
  }

  get titleVerifikasiPin() {
    return $("~Verifikasi PIN INApas");
  }

  get titleKonfirmasiPin() {
    return $("~Konfirmasi PIN INApas");
  }

  get subtitlePinLama() {
    return $("~Masukkan PIN lama anda");
  }

  get subtitlePinBaru() {
    return $("~Masukkan PIN baru anda");
  }

  get subtitleVerifPinBaru() {
    return $("~Masukkan kembali PIN baru anda");
  }

  get tampilkanPin() {
    return $("~Tampilkan PIN");
  }

  get sembunyikanPin() {
    return $("~Sembunyikan PIN");
  }

  get fieldPIN() {
    return $("//android.widget.EditText");
  }

  get digitPinDisembunyikan() {
    return $('//android.widget.EditText[@text="•••••"]');
  }

  get digitPinDitampilkan() {
    return $('//android.widget.EditText[@text="12345"]');
  }

  get pinTidakMatch() {
    return $("~Terjadi kesalahan\nPIN yang dimasukkan harus cocok.\nOK");
  }

  get pinSalah() {
    return $("~Terjadi kesalahan\nStatus: 012\nMessage: Data not found\nOK");
  }

  get pinBerhasilDiubah() {
    return $("~PIN Berhasil Diubah");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async inputPIN(pin) {
    // Langkah 1: Klik pada input PIN untuk memfokuskan
    await AktifkanPinPage.inputPin.click();
    await AktifkanPinPage.inputPin.setValue(pin);
    await driver.hideKeyboard();
  }

  async isKonfirmasiPINScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleKonfirmasiPin.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Konfirmasi PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isBuatPINScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleBuatPin.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isVerifikasiPINScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleVerifikasiPin.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isAktifkanPINScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleAktifkanPin.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isPINLamaScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.subtitlePinLama.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isPINBaruScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.subtitlePinBaru.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isVerifPINBaruScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.subtitleVerifPinBaru.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Buat PIN tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async clickTampilkanPIN() {
    await this.tampilkanPin.click();
  }

  async clickSembunyikanPIN() {
    await this.sembunyikanPin.click();
  }

  async SembunyikanPIN(pin) {
    const pinText = await this.fieldPIN.getText();
    return pinText.includes(pin);
  }

  async TampilkanPIN(pin) {
    const pinText = await this.fieldPIN.getText();
    return pinText.includes(pin);
  }

  async clickKembali() {
    await this.kembaliButton.click();
    return splashPage;
  }
}

module.exports = new VerifikasiWajahPage();
