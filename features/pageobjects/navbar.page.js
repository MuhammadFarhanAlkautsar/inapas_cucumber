const { $, driver } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavbarPage {
  
  /**
   * define selectors using getter methods
   */
  get btnBeranda() {
    return $("~Beranda\nTab 1 dari 5");
  }

  get btnKartu() {
    return $("~Kartu\nTab 2 dari 5");
  }

  get btnTransaksi() {
    return $('~Transaksi\nTab 4 dari 5');
  }

  get btnAkun() {
    return $("~Akun\nTab 5 dari 5");
  }

  get btnQR() {
    return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[5]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   */
  async clickBeranda() {
    await this.btnBeranda.click();
  }

  async clickKartu() {
    await this.btnKartu.click();
  }

  async clickTransaksi() {
    await this.btnTransaksi.click();
  }

  async clickAkun() {
    await this.btnAkun.click();
  }

  async clickQR() {
    await this.btnQR.click();
  }

  async isBerandaSelected() {
    const Selected = await this.btnBeranda.getAttribute('selected');
    return (Selected === "false") ? false : (Selected === "true") ? true : Selected;
  }

  async isKartuSelected() {
    const Selected = await this.btnKartu.getAttribute('selected');
    return (Selected === "false") ? false : (Selected === "true") ? true : Selected;
  }

  async isTransaksiSelected() {
    const Selected = await this.btnTransaksi.getAttribute('selected');
    return (Selected === "false") ? false : (Selected === "true") ? true : Selected;
  }

  async isAkunSelected() {
    const Selected = await this.btnAkun.getAttribute('selected');
    return (Selected === "false") ? false : (Selected === "true") ? true : Selected;
  }

  async isQRSelected() {
    const Selected = await this.btnQR.getAttribute('selected');
    return (Selected === "false") ? false : (Selected === "true") ? true : Selected;
  }

}

module.exports = new NavbarPage();
