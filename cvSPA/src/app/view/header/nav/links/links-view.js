import ElementCreator from '../../../../util/element-creator';
import View from '../../../view';
import './style.scss';

const CssClasses = {
  LI: 'nav_item',
};

export default class LinkView extends View {
  constructor(item) {
    const params = {
      tag: 'li',
      classNames: [CssClasses.LI],
    };
    super(params);

    this.configureView(item);
  }

  configureView(item) {
    const a = new ElementCreator({
      tag: 'a',
      textContent: item.text,
      attributes: item.attributes,
    });
    this.elementCreator.addInnerElement(a);
  }
}
