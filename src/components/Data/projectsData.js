const projectsData = [
  {
    id: 1,
    category: 'Landing Site',
    brightness: 'light',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157813787_10158924213393818_8031783451925725067_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=i2gPuL6GjpAAX9Tlisa&_nc_ht=scontent-sjc3-1.xx&oh=c2d511721560bf7b5c78527aae1bf77e&oe=606AF0FF',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157813787_10158924213393818_8031783451925725067_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=i2gPuL6GjpAAX9Tlisa&_nc_ht=scontent-sjc3-1.xx&oh=c2d511721560bf7b5c78527aae1bf77e&oe=606AF0FF',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Landing Demo 1',
    url: 'https://lunawebdev.com',
    repo: 'https://github.com/oaluna/lunawebdevdotcom',
    text:
      'A previous draft built as a part of my learning process for learning frontend frameworks. Built using Gatsby, React',
    stat1: {
      number: '',
      text: ''
    },
    stat2: {
      number: '',
      text: ''
    },
    stat3: {
      number: '',
      text: ''
    }
  },
  {
    id: 2,
    category: 'Landing Site',
    imageLarge:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
    imageCard:
      'https://www.lunawebdev.com/static/52115e8c382c2974e2de8c293569fda3/43fa5/lunadevblog.png',
      brightness: 'light',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Blog Site',
    url: 'https://lunadevblog.netlify.app',
    repo: 'https://github.com/oaluna/lunadevblog',
    text:
      'My blog site! I initially started posting to a DEV account when I learned from the DEV dashboard about using a content management system to write blog posts from. I deployed this as a means to learn about how CMS works. Built using Next, Stackbit.'
  },
  {
    id: 3,
    category: 'E-Commerce Site',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/158340854_10158924201888818_4215532764369205759_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=9x0E3vhaHDEAX91mXYH&_nc_ht=scontent-sjc3-1.xx&oh=d8797c35bca7208a2108ac513f6c754d&oe=606B5859',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/158340854_10158924201888818_4215532764369205759_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=9x0E3vhaHDEAX91mXYH&_nc_ht=scontent-sjc3-1.xx&oh=d8797c35bca7208a2108ac513f6c754d&oe=606B5859',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'E-Commerce Demo',
    url: 'http://lws-shopping-demo.herokuapp.com/',
    repo: 'https://github.com/oaluna/react-final-crwn-clothing',
    text:
      'This was a project I created learning react from the React Bootcamp on Udemy. This applications is a PWA that stores content with GraphQL and manages auth and item display using Redux. As a part of this project I also implemented a payment API using stripe-elements as well as stripe-js.'  },
  {
    id: 4,
    category: 'E-Commerce Site',
    imageLarge:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157682868_10158924201868818_8088164113961206257_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=bPWcejl-SvkAX9M5MX2&_nc_ht=scontent-sjc3-1.xx&oh=95cead595ebfba4a615d6c9084b4912c&oe=60691479',
    imageCard:
      'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/157682868_10158924201868818_8088164113961206257_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=bPWcejl-SvkAX9M5MX2&_nc_ht=scontent-sjc3-1.xx&oh=95cead595ebfba4a615d6c9084b4912c&oe=60691479',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'E-Commerce Demo #2',
    url: 'https://lunas.mybigcommerce.com/',
    repo: 'https://github.com/oaluna/vercel-commerce',
    text:
      'I have most recently become enamored with the beauty of Next.js and server-side rendering. In my journey I discovered the cloud platform Vercel as well as Big Commerce, a SaaS platform that is customizable with or without code. Built using Next, deployed to Vercel.'
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
      'This project is part of my independent learning as well. When building this real-estate application I learned about state management with Redux, including making API calls like dispatch() and subscribe(). I also added a mock data generator that will generate fake house listings. Built using React, Redux.'
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
      'I will be quite honest. I was bent on learning how that wonderful gradient mask on Stripe.com works. So after some reverse engineering I implemented the gradient webGL to a React application. Through building this application I also learned about Figma and how to generate web applications through prototypes and used a community file to create device mockups for it. Built using React.'
  }

];

export default projectsData;
