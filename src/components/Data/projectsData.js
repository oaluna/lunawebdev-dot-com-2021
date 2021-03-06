const projectsData = [
  {
    id: 1,
    category: 'Landing Site',
    imageLarge:
      "https://www.lunawebdev.com/static/cf53c4931821a2a08b029e1f51ebd930/43fa5/lws-landing-demo.png",
    imageCard:
      "https://www.lunawebdev.com/static/cf53c4931821a2a08b029e1f51ebd930/43fa5/lws-landing-demo.png",
    logoImg: '',
    title: 'Landing Demo #1',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
    stat1: {
      number: '16+',
      text: 'Statistical number'
    },
    stat2: {
      number: '1.7+',
      text: 'Millions of example statistics'
    },
    stat3: {
      number: '19',
      text: 'Number of random things'
    }
  },
  {
    id: 2,
    category: 'Landing Site',
    imageLarge:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
    imageCard:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
    logoImg: 'https://logoipsum.com/logo/logo-24.svg',
    title: 'Blog Site',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
    stat1: {
      number: '12+',
      text: 'Million things to do'
    },
    stat2: {
      number: '1.5+',
      text: 'Million reasons to let you go'
    },
    stat3: {
      number: '5',
      text: 'Number of fingers in my hand'
    }
  },
  {
    id: 3,
    category: 'Landing Site',
    imageLarge:
      'https://www.lunawebdev.com/static/2b580584daa074f2916ed81deb154fa3/43fa5/crwn-clothing-2020.png',
    imageCard:
      'https://www.lunawebdev.com/static/2b580584daa074f2916ed81deb154fa3/43fa5/crwn-clothing-2020.png',
    logoImg: 'https://logoipsum.com/logo/logo-12.svg',
    title: 'E-Commerce Demo',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
    stat1: {
      number: '40K+',
      text: 'More numbers for you'
    },
    stat2: {
      number: '130K+',
      text: 'F***s not given.'
    },
    stat3: {
      number: '500+',
      text: 'Warm fuzzies given.'
    }
  },
  {
    id: 4,
    category: 'Landing Site',
    imageLarge:
      '../../assets/lunasportsstore.png',
    imageCard:
      '../../assets/lunasportsstore.png',
    logoImg: 'https://logoipsum.com/logo/logo-15.svg',
    title: 'E-Commerce Demo #2',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
    stat1: {
      number: '150k+',
      text: 'Yay numbers'
    },
    stat2: {
      number: '60+',
      text: 'Lady Gaga songs I know all the words to'
    },
    stat3: {
      number: '2000+',
      text: 'Lady Gaga-related thoughts had per day'
    }
  },
  {
    id: 5,
    category: 'Landing Site',
    imageLarge:
      '../../assets/2020-portfolio-preview.png',
    imageCard:
      '../../assets/2020-portfolio-preview.png',
    logoImg: 'https://logoipsum.com/logo/logo-11.svg',
    title: 'Landing Page Demo for Web Development',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
    stat1: {
      number: '700k+',
      text: 'Price of the man who can get it.'
    },
    stat2: {
      number: '1+',
      text: 'Million reasons to let you go'
    },
    stat3: {
      number: '150k+',
      text: 'Interactions across all socials'
    }
  },
  // {
  //   id: 6,
  //   category: 'e-commerce',
  //   imageLarge:
  //     'https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   imageCard:
  //     'https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   logoImg: 'https://logoipsum.com/logo/logo-2.svg',
  //   title: 'Project 6',
  //   text:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
  //   stat1: {
  //     number: '10',
  //     text: 'stuff'
  //   },
  //   stat2: {
  //     number: '10',
  //     text: 'stuff'
  //   },
  //   stat3: {
  //     number: '10',
  //     text: 'stuff'
  //   }
  // },
  // {
  //   id: 7,
  //   category: 'Landing Site',
  //   imageLarge:
  //     'https://images.pexels.com/photos/5147325/pexels-photo-5147325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   imageCard:
  //     'https://images.pexels.com/photos/5147325/pexels-photo-5147325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   logoImg: 'https://logoipsum.com/logo/logo-26.svg',
  //   title: 'Project 7',
  //   text:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
  //   stat1: {
  //     number: '5+',
  //     text: 'Millions of views on TikTok (jk)'
  //   },
  //   stat2: {
  //     number: '800K+',
  //     text: 'interactions on TikTok (jk)'
  //   },
  //   stat3: {
  //     number: '600K+',
  //     text: 'Instances of the urge to dance per day'
  //   }
  // },
  // {
  //   id: 8,
  //   category: 'Landing Site',
  //   imageLarge:
  //     'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   imageCard:
  //     'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   logoImg: 'https://logoipsum.com/logo/logo-17.svg',
  //   title: 'Project 8',
  //   text: 'Lorem ipsum',
  //   stat1: {
  //     number: '2.5+',
  //     text: 'Restraining orders received from Lady Gaga'
  //   },
  //   stat2: {
  //     number: '170k+',
  //     text: 'Violations of the former'
  //   },
  //   stat3: {
  //     number: '1375+',
  //     text: 'meters kept away from Lady Gaga at all times'
  //   }
  // },
  // {
  //   id: 9,
  //   category: 'Landing Site',
  //   imageLarge:
  //     'https://images.pexels.com/photos/3504198/pexels-photo-3504198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   imageCard:
  //     'https://images.pexels.com/photos/3504198/pexels-photo-3504198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   logoImg: '',
  //   title: 'Project 9',
  //   text:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
  //   stat1: {
  //     number: '1.9+',
  //     text: 'Lorem ipsum'
  //   },
  //   stat2: {
  //     number: '170k+',
  //     text: 'Lorem ipsum'
  //   },
  //   stat3: {
  //     number: '9',
  //     text: 'Rocket number'
  //   }
  // },
  // {
  //   id: 10,
  //   category: 'Landing Site',
  //   imageLarge:
  //     'https://images.pexels.com/photos/2740844/pexels-photo-2740844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   imageCard:
  //     'https://images.pexels.com/photos/2740844/pexels-photo-2740844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //   logoImg: '',
  //   title: 'Project 10',
  //   text:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.',
  //   stat1: {
  //     number: '900k+',
  //     text: 'Lorem ipsum'
  //   },
  //   stat2: {
  //     number: '2',
  //     text: 'Lorem ipsum'
  //   },
  //   stat3: {
  //     number: '70k+',
  //     text: 'Lorem ipsum'
  //   }
  // }
];

export default projectsData;
