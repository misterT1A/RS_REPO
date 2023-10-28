import './style.scss';
import View from '../view';
import LeftPartView from './leftpart/leftPart-view';
import RightParttView from './rightPart/rightPart-view';

const CssClasses = {
  MAIN: 'main__wrapper',
};

export default class Main extends View {
  constructor() {
    const params = {
      tag: 'main',
      classNames: [CssClasses.MAIN],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new LeftPartView().getHTMLElement(),
      new RightParttView().getHTMLElement(),
    );
  }
}
