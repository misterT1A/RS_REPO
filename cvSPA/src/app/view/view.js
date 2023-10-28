import ElementCreator from '../util/element-creator';

export default class View {
  /**
   * @param {import ('../util/element-creator').ElementParams} params
   */
  constructor(params) {
    this.elementCreator = this.createView(params);
  }

  getHTMLElement() {
    return this.elementCreator.getElement();
  }

  /**
   * @param {import ('../util/element-creator').ElementParams} params
   * @returns {ElementCreator}
   */
  createView(params) {
    const elementParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: params.textContent,
      textHtml: params.textHtml,
      callback: params.callback,
      attributes: params.attributes,
    };

    const elementCreator = new ElementCreator(elementParams);

    return elementCreator;
  }

  addInner(params) {
    if (params.view) {
      const a = new ElementCreator({
        tag: 'a',
        textContent: params.textView,
        attributes: params.attributes,
        classNames: params.cssClasses,
      });

      if (params.innerTag) {
        const innerElement = new ElementCreator({
          tag: params.innerTag,
          textContent: null,
          attributes: params.innerTagAtrib,
          classNames: params.innerTagAtrib.cssClasses,
        });

        a.addInnerElement(innerElement);
      }

      this.elementCreator.addInnerElement(a);
    } else {
      this.elementCreator.setTextContent(params.text, params.textHtml);
    }
  }
}
