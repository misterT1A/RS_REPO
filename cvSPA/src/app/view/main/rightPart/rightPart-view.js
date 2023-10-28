import View from '../../view';
import AboutMeWrapperView from './content/about-me/about-me-wrapper-view';
import CodeExampleWrapperView from './content/codeExample/codeExample-wrapper';
import MainTitleView from './content/main-Title/main-text-view';
import MainTextView from './content/main-Title/main-title-view';
import ProjectsWrapperView from './content/projects/projects-wrapper-view';
import SkillsWrapperView from './content/skills/skills-wrapper-view';

import './style.scss';

const CssClasses = {
  DIV: 'right__part',
};

export default class RightParttView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: [CssClasses.DIV],
    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.addInnerElement(
      new MainTextView().getHTMLElement(),
      new MainTitleView().getHTMLElement(),
      new AboutMeWrapperView().getHTMLElement(),
      new SkillsWrapperView().getHTMLElement(),
      new CodeExampleWrapperView().getHTMLElement(),
      new ProjectsWrapperView().getHTMLElement(),
    );
  }
}
