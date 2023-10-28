import View from '../../view';
import ContentView from './content/left-content-view';
import PhotoView from './photo/photo-view';
import './style.scss';

const CssClasses = {
  DIV: 'left__part',
};

export default class LeftPartView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new PhotoView().getHTMLElement(),
      new ContentView().getHTMLElement(),
    );
  }
}
