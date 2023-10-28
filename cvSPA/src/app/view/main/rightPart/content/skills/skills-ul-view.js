import View from '../../../../view';
import SkillsLiView from './skills-li-view';

const CssClasses = {
  UL: 'skills__list',
};

const Content = [
  {
    text: 'HTML',
  },
  {
    text: 'CSS',
  },
  {
    // eslint-disable-next-line no-script-url
    text: 'JavaScript: learnjavascript.ru in progress',
  },
  {
    text: 'Git',
  },
  {
    text: 'Webpack',
  },
  {
    text: 'English: A2 (I am constantly improving my level)',
  },
];

export default class SkillsUlView extends View {
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
      const li = new SkillsLiView(param);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
  }
}
