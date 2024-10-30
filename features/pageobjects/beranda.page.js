const { $, driver } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BerandaPage {
  /**
   * define selectors using getter methods
   */
  get textHaloUser() {
    return $('//android.view.View[contains(@content-desc, "Halo,")]');
  }

  get btnNotif() {
    return $('//android.widget.ImageView[@content-desc="1"]');
  }

  get btnDataKeluarga() {
    return $('//android.widget.ImageView[@content-desc="DataKeluarga"]');
  }

  get btnDokumenAdministrasi() {
    return $('//android.widget.ImageView[@content-desc="DokumenAdministrasi"]');
  }

  get btnTandaTanganElektronik() {
    return $(
      '//android.widget.ImageView[@content-desc="Tanda TanganElektronik"]'
    );
  }

  get btnPengaturanAkun() {
    return $('//android.widget.ImageView[@content-desc="PengaturanAkun"]');
  }

  get btnKritikSaran() {
    return $("~Punya kritik dan saran?\nSampaikan kritik dan saran Anda.");
  }

  get btnDaftarPanduan() {
    return $("~Daftar Panduan\nPertanyaan yang sering diajukan.");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async clickNotif() {
    await this.btnNotif.click();
  }

  async clickDataKeluarga() {
    await this.btnDataKeluarga.click();
  }

  async clickDokumenAdministrasi() {
    await this.btnDokumenAdministrasi.click();
  }

  async clickTandaTanganElektronik() {
    await this.btnTandaTanganElektronik.click();
  }

  async clickPengaturanAkun() {
    await this.btnPengaturanAkun.click();
  }

  async clickKritikSaran() {
    await this.btnKritikSaran.click();
  }

  async clickDaftarPanduan() {
    await this.btnDaftarPanduan.click();
  }

  async isHaloUser() {
    const HaloUser = await this.textHaloUser.getAttribute('content-desc');;
    return HaloUser;
  }
}

module.exports = new BerandaPage();
