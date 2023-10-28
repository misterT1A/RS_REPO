/**
 * @typedef {{
 *  tag: string,
 * classNames:Array<string>,
 * textContent: string,
 * attributes: Array,
 * callback: function,
 * }} ElementParams
 */

export default class ElementCreator {
  /**
   *
   * @param {ElementParams} param
   */
  constructor(param) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param) {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.classNames);
    this.setTextContent(param.textContent, param.textHtml);
    this.setCallback(param.callback);
    this.setAllAttribute(param.attributes);
  }

  /**
   * @returns {HTMLElement}
   */
  getElement() {
    return this.element;
  }

  /**
   * @param {HTMLElement | ElementCreator} element
   */
  addInnerElement(...elements) {
    elements.forEach((elem) => {
      if (elem instanceof ElementCreator) {
        this.element.append(elem.getElement());
      } else {
        this.element.append(elem);
      }
    });
  }

  /**
   * @param {Array<string>} cssClasses
   */
  setCssClasses(cssClasses) {
    if (cssClasses) {
      cssClasses.forEach((cssClass) => this.element.classList.add(cssClass));
    }
  }

  setAllAttribute(attributes) {
    if (attributes) {
      Object.keys(attributes).forEach((item) => {
        this.element.setAttribute(item, attributes[item]);
      });
    }
  }

  /**
   * @param {string} text
   */
  setTextContent(text, html) {
    if (html) {
      if (text) {
        this.element.innerHTML = text;
      }
    } else {
      this.element.textContent = text;
    }
  }

  /**
   * @param {function} callback
   */
  setCallback(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }
}
