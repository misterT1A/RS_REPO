import View from '../../../view';
import LinkView from './links-view';

const CssClasses = {
  UL: 'nav__list',
};

const textContent = [
  {
    text: 'About me',
    attributes: { href: '"#aboutMe"' },
  },
  {
    text: 'Contacts',
    attributes: { href: '"#contacts"' },
  },
  {
    text: 'Code',
    attributes: { href: '"#code"' },
  },
  {
    text: 'Skills',
    attributes: { href: '"#skills"' },
  },
  {
    text: 'Education',
    attributes: { href: '"#education"' },
  },
];

export default class UlView extends View {
  constructor() {
    const params = {
      tag: 'ul',
      classNames: [CssClasses.UL],
      textContent: '',
    };

    super(params);

    this.configureView();
  }

  configureView() {
    textContent.forEach((item) => {
      const li = new LinkView(item);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
  }
}
