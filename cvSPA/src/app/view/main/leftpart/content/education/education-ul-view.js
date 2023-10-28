import View from '../../../../view';
import EducationLiView from './education-li-view';

const CssClasses = {
  UL: 'contact_list',
};

const Content = [
  {
    textHtml: true,
    text: '2007 - 2013<br>Nizhny Novgorod State Technical University | Nizhny Novgorod.',
  },
  {
    textHtml: true,
    text: '2023<br>RS_SCHOOL Stage 0',
  },
];

export default class EducationtUlView extends View {
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
      const li = new EducationLiView(param);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
  }
}
