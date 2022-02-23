export default class bookApp {
  static fetchApp() {
    if (localStorage.getItem('bookapp') === null) {
      localStorage.setItem('bookapp', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('bookapp'));
  }

  static setBookApp(id) {
    const bookApp = this.fetchApp();
    bookApp.appId = id;
    localStorage.setItem('bookapp', JSON.stringify(bookApp));
  }
}
