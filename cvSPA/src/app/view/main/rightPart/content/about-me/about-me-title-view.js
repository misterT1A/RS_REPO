import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
  Right: 'title__right',
};

export default class AboutMeTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'About me',
      classNames: [CssClasses.H2, CssClasses.Right],
      attributes: { id: 'aboutMe' },
    };
    super(params);
  }
}
