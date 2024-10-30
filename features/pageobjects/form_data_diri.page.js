const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormDataDiriPage {
  /**
   * define selectors using getter methods
   */
  get popupKeluar() {
    return $(
      "~Keluar dari halaman ?\nApakah Anda yakin untuk keluar dari halaman ini?"
    );
  }

  get textDataDiri() {
    return $("~Data Diri");
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get btnKeluar() {
    return $("~Keluar");
  }

  get btnLanjutkan() {
    return $("~Lanjutkan");
  }

  get btnBatal() {
    return $("~Batal");
  }

  get fieldNIK() {
    return $(
      `android=new UiSelector().className("android.widget.EditText").instance(0)`
    );
  }

  // Menggunakan `android=new UiSelector()` yang benar
  get fieldNama() {
    return $(
      `android=new UiSelector().className("android.widget.EditText").instance(1)`
    );
  }

  get fieldEmail() {
    return $(
      `android=new UiSelector().className("android.widget.EditText").instance(2)`
    );
  }

  get fieldPhone() {
    return $(
      `android=new UiSelector().className("android.widget.EditText").instance(3)`
    );
  }

  // Mendapatkan elemen field Tanggal Lahir
  get fieldTanggalLahir() {
    return $("~Tanggal Lahir\n*");
  }

  // Mendapatkan elemen tombol untuk memilih tahun
  get btnPilihTahun() {
    return $("~Pilih tahun");
  }

  // Mendapatkan elemen tombol "Lanjut" untuk submit form
  get btnLanjut() {
    return $("~Lanjut");
  }

  get verifikasiKTPScreen() {
    return $("~android:id/content");
  }

  get errorValidationNIK() {
    return $("~Masukkan 16 digit NIK");
  }

  get errorValidationNama() {
    return $("~Isi nama sesuai identitas");
  }

  get errorValidationTanggalLahir() {
    return $("~Pilih tanggal lahir");
  }

  get errorValidation17YearsOld() {
    return $("~Anda harus berusia minimal 17 tahun");
  }

  get errorValidationEmail() {
    return $("~Masukkan email valid");
  }

  get errorValidationHp() {
    return $("~Isi nomor handphone aktif");
  }

  get errorValidation14digitPhone() {
    return $("~Nomor handphone tidak bisa lebih dari 14 digits");
  }

  get popupKonfirmasiData() {
    return $("~Konfirmasi Data");
  }

  get textKonfirmasiDataNIK() {
    return $("(//android.view.View[contains(@content-desc, 'NIK')])[2]");
  }

  get textKonfirmasiDataNama() {
    return $("(//android.view.View[contains(@content-desc, 'Nama')])[5]");
  }

  get textKonfirmasiDataTanggalLahir() {
    return $("(//android.view.View[contains(@content-desc, 'Tanggal Lahir')])[7]");
  }

  get textKonfirmasiDataEmail() {
    return $("(//android.view.View[contains(@content-desc, 'email')])[9]");
  }

  get textKonfirmasiDataPhone() {
    return $("(//android.view.View[contains(@content-desc, 'phone')])[11]");
  }

  get msgAlreadyRegistered() {
    return $("~Terjadi kesalahan\nIdentity is already registered\nOK");
  }

  get msgDukcapilError() {
    return $(
      "~Terjadi kesalahan\nSorry, your details don't match. Please check and try again or contact Dukcapil for help.\nOK"
    );
  }
  /**
   * a method to encapsule automation code to interact with the page
   */
  // Mengisi field NIK dengan nilai yang diberikan
  async inputNIK(nik) {
    await this.fieldNIK.click();
    await this.fieldNIK.setValue(nik);
    await driver.hideKeyboard();
  }

  // Mengisi field Nama dengan nilai yang diberikan dan menutup keyboard setelahnya
  async inputNama(nama) {
    await this.fieldNama.click();
    await this.fieldNama.setValue(nama);
    await driver.hideKeyboard();
  }

  // Mengisi field Tanggal Lahir dengan memilih tahun dan tanggal yang sesuai
  async inputTanggalLahir(tahun, tanggalDescription) {
    await this.fieldTanggalLahir.click();
    await this.btnPilihTahun.click();
    const SearchTahun = $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${tahun}"))`
    );
    await SearchTahun.click();

    let isElementFound = false;
    const elementPrevious = $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[2]'
    );

    const elementNext = $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.Button[3]'
    );

    let currentDateDesc = "";
    while (!currentDateDesc.includes("1 Januari")) {
      // Mengambil elemen yang menunjukkan bulan saat ini
      await elementPrevious.click();
      const currentDateElement = $(
        "//android.widget.Button[contains(@content-desc, '1 Januari')]"
      );
      const currentDateDesc = await currentDateElement.isDisplayed();

      // Check if the current date contains '1 Jan'
      if (currentDateDesc) {
        break;
      }
      // Keep clicking the previous button to navigate backward in the calendar
    }

    while (!isElementFound) {
      // Check if the desired element (date) is displayed again
      const TanggalLahir = $(`~${tanggalDescription}`);
      isElementFound = await TanggalLahir.isDisplayed();

      if (isElementFound) {
        // Click the desired element if found
        await TanggalLahir.click();
        break;
      }

      await elementNext.click();
    }
    // Mengklik tombol "OKE" setelah memilih tanggal lahir
    await $("~OKE").click();
  }

  // Mengisi field Email dengan nilai yang diberikan dan menutup keyboard setelahnya
  async inputEmail(email) {
    await this.fieldEmail.click();
    await this.fieldEmail.setValue(email);
    await driver.hideKeyboard();
  }

  // Mengisi field Nomor Telepon dengan nilai yang diberikan dan menutup keyboard setelahnya
  async inputPhone(phone) {
    await this.fieldPhone.click();
    await this.fieldPhone.setValue(phone);
    await driver.hideKeyboard();
  }

  // Memverifikasi apakah layar pesan gagal ditampilkan
  async isDukcapilError() {
    return await this.msgDukcapilError.isDisplayed();
  }

  async isAlreadyRegistered() {
    return await this.msgAlreadyRegistered.isDisplayed();
  }

  async isInvalidNIKValidation() {
    return await this.errorValidationNIK.isDisplayed();
  }

  async isInvalidNamaValidation() {
    return await this.errorValidationNama.isDisplayed();
  }

  async isInvalidTanggalLahirValidation() {
    return await this.errorValidationTanggalLahir.isDisplayed();
  }

  async isInvalid17TahunValidation() {
    return await this.errorValidation17YearsOld.isDisplayed();
  }

  async isInvalidEmailValidation() {
    return await this.errorValidationEmail.isDisplayed();
  }

  async isInvalidPhoneValidation() {
    return await this.errorValidationHp.isDisplayed();
  }

  async isInvalidPhone14digitValidation() {
    return await this.errorValidation14digitPhone.isDisplayed();
  }

  async clickKembali() {
    await this.kembaliButton.click();
  }

  async clickLanjut() {
    await this.btnLanjut.click();
  }

  async clickLanjutkan() {
    await this.btnLanjutkan.click();
  }

  async clickLanjutkan() {
    await this.btnLanjutkan.click();
  }
}

module.exports = new FormDataDiriPage();
