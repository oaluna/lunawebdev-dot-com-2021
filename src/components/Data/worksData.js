const worksData = [
  {
    id: 1,
    category: 'projects',
    image1: {
      url:
        'https://images.pexels.com/photos/1606386/pexels-photo-1606386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      class: 'pastelImageLarge'
    },
    logo: {
      url: 'https://images.pexels.com/photos/1606386/pexels-photo-1606386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      class: 'pastelImageSmall'
    },
    card: {
      title: 'Portfolio website created. Visit https://oscarluna.dev',
      text: 'Total reach:',
      number: 12000000
    },
    info1: {
      title: 'Portfolio website created. Visit https://oscarluna.dev',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales purus arcu, sit amet pulvinar mauris vulputate et. Maecenas sed venenatis purus. Phasellus nec semper libero, eget pharetra nulla. Sed viverra maximus lacinia. Sed condimentum lorem orci, vitae finibus nunc viverra a. Suspendisse volutpat imperdiet leo, sit amet tincidunt sapien interdum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ultricies eu dui ac finibus.'
    },
    info2: {
      title: null,
      text: null
    },
    info3: {
      title: null,
      text: null
    },
    tags: {
      tag1: 'Web',
      tag2: 'Portfolio',
      tag3: 'Web Development',
      tag4: 'For Hire',
      tag5: 'Front-End Developer'
    },
    stats1: {
      title: 'Campaign Results:',

      url1: null,
      social1: null,
      number1: null,
      tag1: 'and counting',

      url2: null,
      social2: null,
      number2: null,
      tag2: 'and counting',

      url3: null,
      social3: null,
      number3: 96,
      tag3: null,

      url4: null,
      social4: null,
      number4: 19,
      tag4: null,

      url5: null,
      social5: null,
      number5: null,
      tag5: null,

      url6: null,
      social6: null,
      number6: null,
      tag6: null
    }
  },
  {
    id: 2,
    category: 'Landing Site',
    imageLarge:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
    imageCard:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Blog Site',
    url: 'https://lunadevblog.netlify.app',
    repo: 'https://github.com/oaluna/lunadevblog',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.'
  },
  {
    id: 3,
    category: 'Landing Site',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/158340854_10158924201888818_4215532764369205759_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=9x0E3vhaHDEAX91mXYH&_nc_ht=scontent-sjc3-1.xx&oh=d8797c35bca7208a2108ac513f6c754d&oe=606B5859',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/158340854_10158924201888818_4215532764369205759_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=9x0E3vhaHDEAX91mXYH&_nc_ht=scontent-sjc3-1.xx&oh=d8797c35bca7208a2108ac513f6c754d&oe=606B5859',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'E-Commerce Demo',
    url: 'http://lws-shopping-demo.herokuapp.com/',
    repo: 'https://github.com/oaluna/react-final-crwn-clothing',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.'
  },
  {
    id: 4,
    category: 'Landing Site',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157682868_10158924201868818_8088164113961206257_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=bPWcejl-SvkAX9M5MX2&_nc_ht=scontent-sjc3-1.xx&oh=95cead595ebfba4a615d6c9084b4912c&oe=60691479',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157682868_10158924201868818_8088164113961206257_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=bPWcejl-SvkAX9M5MX2&_nc_ht=scontent-sjc3-1.xx&oh=95cead595ebfba4a615d6c9084b4912c&oe=60691479',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'E-Commerce Demo #2',
    url: 'https://lunas.mybigcommerce.com/',
    repo: 'https://github.com/oaluna/vercel-commerce',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.'
  },
  {
    id: 5,
    category: 'Landing Site',
    imageLarge:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/157535679_10158924201803818_2601096035058773389_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=vYLgt9mIrmYAX_pGxfR&_nc_ht=scontent-lax3-1.xx&oh=59645ba1e6791c46c2cc9ba654746067&oe=606AF256',
    imageCard:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/157535679_10158924201803818_2601096035058773389_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=vYLgt9mIrmYAX_pGxfR&_nc_ht=scontent-lax3-1.xx&oh=59645ba1e6791c46c2cc9ba654746067&oe=606AF256',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Globomantics - a Real Estate page demo',
    url: 'https://globomantics.vercel.app/',
    repo: 'https://github.com/oaluna/globomantics',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.'
  },
  {
    id: 6,
    category: 'Landing Site',
    imageLarge:
      'https://www.lunawebdev.com/static/cf53c4931821a2a08b029e1f51ebd930/43fa5/lws-landing-demo.png',
    imageCard:
      'https://www.lunawebdev.com/static/cf53c4931821a2a08b029e1f51ebd930/43fa5/lws-landing-demo.png',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Landing Demo #2',
    url: 'https://lws-landing-demo.vercel.app',
    repo: 'https://lws-landing-demo',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet leo ex, ac vulputate ipsum vehicula sit amet. Mauris mattis sem eu mauris iaculis gravida. Maecenas eget tortor at est cursus tempus. Aliquam id facilisis leo.'
  }
];

export default worksData;
