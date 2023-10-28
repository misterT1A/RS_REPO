import './style.scss';
import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
};

export default class EducationTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'Education',
      classNames: [CssClasses.H2],
      attributes: { id: 'education' },
    };
    super(params);
  }
}
