import View from '../../../../view';
import ProjectsLiView from './projects-content-li-view';
import library from '../../../../../../img/library.png';
import Racing from '../../../../../../img/racingGame.png';
import Snake from '../../../../../../img/snakeGame.png';
import AudioPlayer from '../../../../../../img/audioPlayer.png';
import VideoPlayer from '../../../../../../img/videoPlayer.png';
import ImageGalary from '../../../../../../img/imageGalary.png';

const CssClasses = {
  UL: 'projects_list',
};

const Content = [
  {
    view: true,
    innerTag: 'img',
    textView: 'Library',
    innerTagAtrib: {
      alt: 'Library',
      src: library,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/library/',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
  {
    view: true,
    innerTag: 'img',
    textView: 'Racing Game',
    innerTagAtrib: {
      alt: 'Racing Game',
      src: Racing,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/js30randomGame/',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
  {
    view: true,
    innerTag: 'img',
    textView: 'Snake Game',
    innerTagAtrib: {
      alt: 'Snake Game',
      src: Snake,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/js30snakeGame/',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
  {
    view: true,
    innerTag: 'img',
    textView: 'Audio Player',
    innerTagAtrib: {
      alt: 'Audio Player',
      src: AudioPlayer,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/js30audio/',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
  {
    view: true,
    innerTag: 'img',
    textView: 'Video Player',
    innerTagAtrib: {
      alt: 'Video Player',
      src: VideoPlayer,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/js30video',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
  {
    view: true,
    innerTag: 'img',
    textView: 'Image Galary',
    innerTagAtrib: {
      alt: 'Image Galary',
      src: ImageGalary,
      cssClasses: ['projects_img'],
    },
    text: '',
    attributes: {
      href: 'https://mistert1a.github.io/RS_REPO/js30imageGalery/',
      target: '_blank',
    },
    cssClasses: ['projects_link'],
  },
];

export default class ProjectsUlView extends View {
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
      const li = new ProjectsLiView(param);
      this.elementCreator.addInnerElement(li.getHTMLElement());
    });
  }
}
