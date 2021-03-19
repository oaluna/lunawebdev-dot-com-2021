const projectsData = [
  {
    id: 1,
    category: 'Landing Site',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157813787_10158924213393818_8031783451925725067_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=i2gPuL6GjpAAX9Tlisa&_nc_ht=scontent-sjc3-1.xx&oh=c2d511721560bf7b5c78527aae1bf77e&oe=606AF0FF',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157813787_10158924213393818_8031783451925725067_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=i2gPuL6GjpAAX9Tlisa&_nc_ht=scontent-sjc3-1.xx&oh=c2d511721560bf7b5c78527aae1bf77e&oe=606AF0FF',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Landing Demo 1',
    url: 'https://lunawebdev.com',
    repo: 'https://github.com/oaluna/lunawebdevdotcom',
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

export default projectsData;
