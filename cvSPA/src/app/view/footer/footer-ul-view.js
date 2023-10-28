import ElementCreator from '../../util/element-creator';
import View from '../view';
import FoLinkView from './footer-li-view';
import rsLogo from '../../../img/rs_school_js.svg';

const CssClasses = {
  UL: 'footer__list',
};

const Content = [
  {
    view: true,
    innerTag: false,
    textView: 'Mi GitHub',
    attributes: {
      href: 'https://github.com/misterT1A',
      target: '_blank',
    },
    cssClasses: ['git__link'],
  },
  {
    view: false,
    innerTag: false,
    text: '2023',
  },
  {
    view: true,
    innerTag: 'img',
    innerTagAtrib: {
      alt: 'rsLogo',
      src: rsLogo,
    },
    text: '',
    attributes: {
      href: 'https://rs.school/js/',
      target: '_blank',
    },
    cssClasses: ['rs__link'],
  },
];

export default class FoUlView extends View {
  constructor() {
    const params = {
      tag: 'ul',
      classNames: [CssClasses.UL],
    };

    super(params);

    this.configureView();
  }

  configureView() {
    Content.forEach((param) => {
      const li = new FoLinkView(param);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
  }
}
