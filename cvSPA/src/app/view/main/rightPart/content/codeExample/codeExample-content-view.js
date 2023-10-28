import View from '../../../../view';

const CssClasses = {
  CODE: 'code',
};

export default class CodeExampleContentView extends View {
  constructor() {
    const params = {
      tag: 'code',
      textHtml: true,
      textContent:
        'function multiply(a, b) { <br>return a * b;<br>}<br><br>let result = multiply(1, 2);<br>alert( result );<br>',
      classNames: [CssClasses.CODE],
    };
    super(params);
  }
}
