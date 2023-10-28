import View from '../../../../view';

const CssClasses = {
  LI: 'contact_item',
};

export default class EducationLiView extends View {
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
