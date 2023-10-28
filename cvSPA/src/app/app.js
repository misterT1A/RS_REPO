import HeaderView from './view/header/header-view';
import FooterView from './view/footer/footer-view';
import '../style/style.scss';
import Main from './view/main/main-wrapper-view';

export default class App {
  constructor() {
    this.header = null;
    this.main = null;
    this.footer = null;

    this.createView();
  }

  createView() {
    this.header = new HeaderView();
    this.main = new Main();
    this.footer = new FooterView();

    document.body.append(
      this.header.getHTMLElement(),
      this.main.getHTMLElement(),
      this.footer.getHTMLElement(),
    );
  }
}
