import View from '../../../../view';
import ContactLiView from './contact-li';

const CssClasses = {
  UL: 'contact_list',
};

const Content = [
  {
    textHtml: true,
    text: 'Discord:<br>100kgofmeat',
  },
  {
    textHtml: true,
    text: 'Address:<br>Russia, N.Novgorod',
  },
  {
    textHtml: true,
    view: true,
    text: 'Email:<br>',
    textView: 'paradogss@mail.ru',
    attributes: {
      href: 'mailto:paradogss@mail.ru',
      target: '_blank',
    },
    cssClasses: [],
  },
];

export default class ContactUlView extends View {
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
      const li = new ContactLiView(param);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
    // this.elementCreator.addInnerElement(
    //   new ContactTitleView().getHTMLElement(),
    // );
  }
}
