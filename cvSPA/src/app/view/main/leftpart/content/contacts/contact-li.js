import View from '../../../../view';

const CssClasses = {
  LI: 'contact_item',
};

export default class ContactLiView extends View {
  constructor(content) {
    const params = {
      tag: 'li',
      textContent: content.text,
      textHtml: true,
      classNames: [CssClasses.LI],
    };
    super(params);

    this.addInner(content);
  }
}
