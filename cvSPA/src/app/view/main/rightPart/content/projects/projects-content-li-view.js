import View from '../../../../view';

const CssClasses = {
  LI: 'projects_item',
};

export default class ProjectsLiView extends View {
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
