import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
  Right: 'title__right',
};

export default class CodeExampleTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'Code Example',
      classNames: [CssClasses.H2, CssClasses.Right],
      attributes: { id: 'code' },
    };
    super(params);
  }
}
