import View from '../view';

const CssClasses = {
  BURGER: 'burger',
};

export default class BurgerBtnView extends View {
  constructor(navElement) {
    const params = {
      tag: 'button',
      classNames: [CssClasses.BURGER],
    };
    super(params);
    this.addElementsDOM(navElement);
    this.addListner();
  }

  addElementsDOM(navElement) {
    this.body = document.querySelector('body');
    this.nav = navElement;
    // this.nav = HeaderView.nav;
  }

  addListner() {
    const elem = this.elementCreator.getElement();
    elem.addEventListener('click', this.toggleNav);
  }

  toggleNav = () => {
    this.nav.classList.toggle('drop');
    this.body.classList.toggle('overflow');
  };
}
