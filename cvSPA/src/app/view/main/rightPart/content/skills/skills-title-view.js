import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
  Right: 'title__right',
};

export default class SkillsTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'Skills',
      classNames: [CssClasses.H2, CssClasses.Right],
      attributes: { id: 'skills' },
    };
    super(params);
  }
}
