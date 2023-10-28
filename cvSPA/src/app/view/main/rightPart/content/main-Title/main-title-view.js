import View from '../../../../view';

const CssClasses = {
  H1: 'right__title',
};

export default class MainTitleView extends View {
  constructor() {
    const params = {
      tag: 'h1',
      textContent: 'Artem Taraskin',
      classNames: [CssClasses.H1],
    };
    super(params);
  }
}
