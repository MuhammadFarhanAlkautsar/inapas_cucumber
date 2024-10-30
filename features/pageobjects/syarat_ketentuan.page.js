const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SyaratKetentuanPage {
  
  /**
   * define selectors using getter methods
   */

  get btnLanjutkan() {
    return $("~Lanjut");
  }

  get btnKembali() {
    return $("~Kembali");
  }

  get titleSyaratKetentuan() {
    return $("~Syarat dan Ketentuan");
  }

  get linkKebijakanPrivasi() {
    return $("~kebijakan privasi dan perjanjian pelanggan ");
  }

  get screenKebijakanPrivasi() {
    return $('android=new UiSelector().text("Kebijakan Privasi").instance(1)');
  }

  get checkboxSyaratKetentuan() {
    return $('android=new UiSelector().className("android.widget.CheckBox").instance(0)');
  }

  get textSyaratKetentuan() {
    return $('~Saya menyetujui seluruh syarat dan ketentuan dari INApas.');
  }

  get checkboxKebijakanPrivasi() {
    return $('android=new UiSelector().className("android.widget.CheckBox").instance(1)');
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickLanjut() {
    await this.btnLanjutkan.click();
  }
  
  async clickCheckBoxSyaratKetentuan() {
    await this.checkboxSyaratKetentuan.click();
  }

  async clickCheckBoxKebijakanPrivasi() {
    await this.checkboxKebijakanPrivasi.click();
  }

  async isCheckBoxSyaratKetentuanDisplayed() {
    const CheckboxDisplayed = await this.checkboxSyaratKetentuan.getAttribute('enabled');
    return CheckboxDisplayed;
  }

  async isCheckBoxKebijakanPrivasiDisplayed() {
    const CheckboxDisplayed = await this.checkboxKebijakanPrivasi.getAttribute('enabled');
    return CheckboxDisplayed;
  }

  async isCheckBoxSyaratKetentuanChecked() {
    const CheckboxDisplayed = await this.checkboxKebijakanPrivasi.getAttribute('checked');
    return CheckboxDisplayed;
  }

  async isCheckBoxKebijakanPrivasiChecked() {
    const CheckboxDisplayed = await this.checkboxKebijakanPrivasi.getAttribute('checked');
    return CheckboxDisplayed;
  }

  async isLanjutEnabled() {
    const btnLanjut = await this.btnLanjutkan.isEnabled();
    return btnLanjut;
  }

}

module.exports = new SyaratKetentuanPage();
