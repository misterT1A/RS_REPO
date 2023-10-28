import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
  Right: 'title__right',
};

export default class ProjectsTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'My_projects',
      classNames: [CssClasses.H2, CssClasses.Right],
    };
    super(params);
  }
}
