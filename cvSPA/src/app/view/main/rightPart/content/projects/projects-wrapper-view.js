import View from '../../../../view';
import ProjectsUlView from './projects-content-ul-view';
import ProjectsTitleView from './projects-title-view';

const CssClasses = {
  DIV: 'my_projects',
};

export default class ProjectsWrapperView extends View {
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
      new ProjectsTitleView().getHTMLElement(),
      new ProjectsUlView().getHTMLElement(),
    );
  }
}
