import View from '../../../view';
import './style.scss';
import photo from '../../../../../img/photo2.jpg';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
  DIV: 'left__photo',
};

export default class PhotoView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    const img = new ElementCreator({
      tag: 'img',
      textContent: null,
      attributes: {
        src: photo,
        alt: 'photo',
      },
      classNames: ['photo'],
    });

    this.elementCreator.addInnerElement(img);
  }
}
