import View from '../view';
import FoUlView from './footer-ul-view';
import './style.scss';

const CssClasses = {
  FOOTER: 'footer',
};

export default class FooterView extends View {
  constructor() {
    const params = {
      tag: 'footer',
      classNames: [CssClasses.FOOTER],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(new FoUlView().getHTMLElement());
  }
}
