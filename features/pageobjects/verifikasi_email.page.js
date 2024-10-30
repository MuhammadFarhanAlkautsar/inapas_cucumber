const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifikasiEmailPage {
  /**
   * define selectors using getter methods
   */
  get btnLanjutkan() {
    return $("~Lanjutkan");
  }

  get titleVerifikasiEmail() {
    return $("~Verifikasi Alamat Email");
  }

  get btnKirimOTP() {
    return $("~Kirim Ulang Kode OTP");
  }

  get timerElement() {
    return $("~Belum menerima kode? Kirim ulang dalam 00:00");
  }

  get fieldOTP() {
    return $("//android.widget.EditText");
  }

  get msgGagalVerifikasi() {
    return $("~Terjadi kesalahan\nMohon coba lagi\nOK");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickLanjutkan() {
    await this.btnVerifikasiOnline.click();
  }

  async clickKirimUlangOTP() {
    await this.btnKembali.click();
  }

  async inputOTP(otp) {
    await this.inputOTP.click();
    await this.inputOTP.setValue(otp);
    await driver.hideKeyboard();
  }

  async isLanjutEnabled() {
    const btnLanjut = await this.btnLanjutkan.isEnabled();
    return btnLanjut;
  }

  async isVerifikasiEmailScreen() {
    return await browser.waitUntil(
      async () => {
        return await this.titleVerifikasiEmail.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Halaman Verifikasi Email Screen tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async isGagalVerifikasi() {
    return await browser.waitUntil(
      async () => {
        return await this.msgGagalVerifikasi.isDisplayed();
      },
      {
        timeout: 5000, // Timeout maksimal, misalnya 5 detik
        timeoutMsg:
          "Pop Up Gagal Verifikasi tidak muncul dalam batas waktu yang ditentukan",
      }
    );
  }

  async retrievedOTP() {
    await driver.pause(10000);
      // Langkah 1: Buka notification panel
      await driver.openNotifications(); // Membuka panel notifikasi
      console.log("Notifikasi dibuka.");

      // Langkah 2: Tunggu hingga notifikasi yang berisi "OTP" muncul
      const notificationTextElement = $(
        '//android.widget.TextView[@resource-id="android:id/big_text"]'
      );
      await notificationTextElement.waitForDisplayed({
        timeout: 30000,
        timeoutMsg: "Notifikasi tidak muncul dalam waktu yang diharapkan",
      });
      console.log("Elemen notifikasi ditemukan.");

      // Langkah 3: Ambil teks dari notifikasi
      const otpText = await notificationTextElement.getText();
      console.log("Teks Notifikasi:", otpText); // Debugging untuk melihat teks notifikasi

      // Langkah 4: Hapus semua karakter non-angka menggunakan replace dan ambil OTP
      const otp = otpText.replace(/[^0-9]/g, ""); // Menghapus semua karakter selain angka
      console.log("OTP yang ditemukan:", otp);

      // Langkah 5: Gunakan driver.back() untuk kembali ke aplikasi
      await driver.back(); // Tekan tombol back untuk menutup notification panel
      console.log("Kembali ke aplikasi.");

      // Langkah 6: Tunggu input OTP tersedia dan masukkan OTP
      await this.fieldOTP.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Input OTP tidak ditemukan.",
      });
      console.log("Input OTP ditemukan.");
  }

  async TimerOTP(waitTime) {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  async KirimUlangOTP() {
    // Langkah 3: Tunggu hingga tombol "Kirim Ulang OTP" menjadi enabled setelah timer selesai
    await this.timerElement.waitForDisplayed({
      timeout: 180000,
      timeoutMsg:
        "Tombol Kirim Ulang OTP tidak aktif dalam waktu yang diharapkan.",
    });

    // Langkah 4: Klik tombol "Kirim Ulang OTP" untuk meminta kode OTP baru
    await this.btnKirimOTP();

    const timerOTP = $("~Belum menerima kode? Kirim ulang dalam 01:55")
    await timerOTP.waitForDisplayed(
      { timeout: 10000, timeoutMsg: "Kirim Ulang OTP Gagal." }
    );
  }
}

module.exports = new VerifikasiEmailPage();
