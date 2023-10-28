import View from '../../../../view';
import AboutMeTitleView from './about-me-title-view';
import AboutMeTextView from './about-me-text-view';

const CssClasses = {
  DIV: 'about__me',
};

export default class AboutMeWrapperView extends View {
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
      new AboutMeTitleView().getHTMLElement(),
      new AboutMeTextView().getHTMLElement(),
    );
  }
}
