const { $, driver } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BiometricPage {
  
  /**
   * define selectors using getter methods
   */
  get textAuthenticationRequired() {
    return $(
      '//android.widget.TextView[@resource-id="com.android.systemui:id/title"]'
    );
  }

  get textKonfirmasiSidikJari() {
    return $(
      '//android.widget.TextView[@resource-id="com.android.systemui:id/description"]'
    );
  }

  get verifikasiBerhasil() {
    return $("~Proses Verifikasi Berhasil");
  }

  get btnBatalkan() {
    return $('//android.widget.TextView[@resource-id="com.android.systemui:id/color_biometric_cancel"]');
  }

  get btnSandi() {
    return $('//android.widget.TextView[@resource-id="com.android.systemui:id/color_biometric_to_lock"]');
  }

  get titleSandiScreen() {
    return $('//android.widget.TextView[@resource-id="com.android.systemui:id/title"]');
  }

  get fieldSandi() {
    return $('//android.widget.EditText[@resource-id="com.android.systemui:id/lockPassword"]');
  }

  get btnConfirmSandi() {
    return $('//android.widget.ImageView[@resource-id="com.android.systemui:id/confirm"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickBatalkan() {
    await this.btnBatalkan.click();
  }

  async clickSandi() {
    await this.btnSandi.click();
  }

  async inputSandi(sandi) {
    await this.fieldSandi.click();
    await this.fieldSandi.setValue(sandi);
    await driver.hideKeyboard();
  }

  async isAuthenticationRequired() {
    const AuthenticationRequired = await this.textAuthenticationRequired.getText();
    return AuthenticationRequired === 'Authentication required';
  }

  async isCobaLagi() {
    const AuthenticationRequired = await this.textAuthenticationRequired.getText();
    return AuthenticationRequired === 'Coba Lagi';
  }

  async isKonfirmasiSidikJari() {
    const AuthenticationRequired = await this.textKonfirmasiSidikJari.getText();
    return AuthenticationRequired === 'Konfirmasi dengan Sidik Jari';
  }
}

module.exports = new BiometricPage();
