import './style.scss';
import View from '../../../../view';

const CssClasses = {
  H2: 'mini__title',
};

export default class ContactTitleView extends View {
  constructor() {
    const params = {
      tag: 'h2',
      textContent: 'My Contacts',
      classNames: [CssClasses.H2],
      attributes: { id: 'contacts' },
    };
    super(params);
  }
}
