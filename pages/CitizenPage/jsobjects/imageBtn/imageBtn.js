export default {
  // Hàm chung mở URL
  openLink: (url) => {
    navigateTo(url, { target: "_blank" }); // Sử dụng navigateTo của Appsmith
  },

  // Hàm cụ thể cho từng ảnh
  openMTTQTW: () => {
    this.openLink('http://mattran.org.vn/');
  },
  openBoYTe: () => {
    this.openLink('https://moh.gov.vn/');
  },
  openUngPhoSuCo: () => {
    this.openLink('https://tkcn.gov.vn/');
  },
  openBaoChinhPhu: () => {
    this.openLink('https://baochinhphu.vn/');
  },
  openTrungTamKTTV: () => {
    this.openLink('https://www.nchmf.gov.vn/kttv/');
  },
  openVTV: () => {
    this.openLink('https://vtv.vn/');
  }
};
