import ElementCreator from '../../util/element-creator';
import rsLogo from '../../../img/rs_school_js.svg';
import View from '../view';

const CssClasses = {
  LI: 'footer__item',
};

export default class FoLinkView extends View {
  constructor(content) {
    const params = {
      tag: 'li',
      classNames: [CssClasses.LI],
    };
    super(params);

    this.addInner(content);
  }

  // configureView(content) {
  //   if (content.view) {
  //     const a = new ElementCreator({
  //       tag: 'a',
  //       textContent: content.text,
  //       attributes: content.attributes,
  //       classNames: content.cssClasses,
  //     });

  //     if (content.innerTag) {
  //       const innerElement = new ElementCreator({
  //         tag: content.innerTag,
  //         textContent: null,
  //         attributes: {
  //           alt: 'rsLogo',
  //           src: rsLogo,
  //         },
  //         classNames: null,
  //       });

  //       a.addInnerElement(innerElement);
  //     }

  //     this.elementCreator.addInnerElement(a);
  //   } else {
  //     this.elementCreator.setTextContent(content.text);
  //   }
  // }
}
