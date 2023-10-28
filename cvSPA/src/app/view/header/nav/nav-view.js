import View from '../../view';
import UlView from './links/ul-view';
import './style.scss';

const CssClasses = {
  NAV: 'nav',
};

export default class NavView extends View {
  constructor() {
    const params = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
    };
    super(params);

    this.addElementsDOM();
    this.addListner();
    this.configureView();
  }

  addElementsDOM() {
    this.body = document.querySelector('body');
  }

  addListner() {
    const elem = this.elementCreator.getElement();
    elem.addEventListener('click', this.toggleNav.bind(this));
  }

  toggleNav(event) {
    // if (event.target.classList.contains('nav')) {
    this.elementCreator.getElement().classList.toggle('drop');
    this.body.classList.toggle('overflow');
    // }
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new UlView(this.elementCreator.getElement()).getHTMLElement(),
    );
  }
}
