import View from '../../../../view';

const CssClasses = {
  SPAN: 'description__text',
};

export default class AbouteMeTextView extends View {
  constructor() {
    const params = {
      tag: 'span',
      textContent:
        'I always wanted to become a frontend developer, so finally I took up my studies.',
      classNames: [CssClasses.SPAN],
    };
    super(params);
  }
}
