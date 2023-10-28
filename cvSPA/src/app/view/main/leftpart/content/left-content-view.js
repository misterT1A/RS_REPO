import View from '../../../view';
import ContactUlView from './contacts/contact-ul';
import ContactTitleView from './contacts/contacts-title-view';
import EducationTitleView from './education/education-title-view';
import EducationtUlView from './education/education-ul-view';
import './style.scss';

const CssClasses = {
  DIV: 'left__content',
};

export default class ContentView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    // Content.forEach((param) => {
    //   const li = new FoLinkView(param);
    //   this.elementCreator.addInnerElement(li.getHTMLElement());
    // });
    this.elementCreator.addInnerElement(
      new ContactTitleView().getHTMLElement(),
      new ContactUlView().getHTMLElement(),
      new EducationTitleView().getHTMLElement(),
      new EducationtUlView().getHTMLElement(),
    );
  }
}
