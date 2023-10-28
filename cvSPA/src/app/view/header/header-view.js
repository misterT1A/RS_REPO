import View from '../view';
import BurgerBtnView from './burger-btn-view';
import NavView from './nav/nav-view';
import './style.scss';

const CssClasses = {
  HEADER: 'header',
};

export default class HeaderView extends View {
  constructor() {
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    const nav = new NavView().getHTMLElement();
    this.elementCreator.addInnerElement(
      nav,
      new BurgerBtnView(nav).getHTMLElement(),
    );
  }
}
