import View from '../../../../view';

const CssClasses = {
  LI: 'skills__item',
};

export default class SkillsLiView extends View {
  constructor(content) {
    const params = {
      tag: 'li',
      textContent: content.text,
      textHtml: false,
      classNames: [CssClasses.LI],
    };
    super(params);

    this.addInner(content);
  }
}
