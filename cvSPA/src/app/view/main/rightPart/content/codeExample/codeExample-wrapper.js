import View from '../../../../view';
import CodeExampleContentView from './codeExample-content-view';
import CodeExampleTitleView from './codeExample-title-view';

const CssClasses = {
  DIV: 'code__example',
};

export default class CodeExampleWrapperView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new CodeExampleTitleView().getHTMLElement(),
      new CodeExampleContentView().getHTMLElement(),
    );
  }
}
