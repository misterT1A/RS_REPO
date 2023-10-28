import View from '../../../../view';
import SkillsTitleView from './skills-title-view';
import SkillsUlView from './skills-ul-view';

const CssClasses = {
  DIV: 'skills',
};

export default class SkillsWrapperView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new SkillsTitleView().getHTMLElement(),
      new SkillsUlView().getHTMLElement(),
    );
  }
}
