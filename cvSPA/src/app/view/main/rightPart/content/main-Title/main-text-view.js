import View from '../../../../view';

const CssClasses = {
  H2: 'right__text',
};

export default class MainTextView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'Front-End developer',
      classNames: [CssClasses.H2],
    };
    super(params);
  }
}
