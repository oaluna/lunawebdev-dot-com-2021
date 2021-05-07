const projectsData = [
  {
    id: 1,
    category: 'Landing Site',
    brightness: 'light',
    imageLarge:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817507/oscarlunadotdev/lunaWebDevDotCom.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817507/oscarlunadotdev/lunaWebDevDotCom.png',
    logoImg: '../../assets/oscarArmandoLunaLogo.svg',
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
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617824535/oscarlunadotdev/lunaDevBlog.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617824535/oscarlunadotdev/lunaDevBlog.png',
    brightness: 'light',
    logoImg: '../../assets/oscarArmandoLunaLogo.svg',
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
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617818282/oscarlunadotdev/crwnClothing2021.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617818282/oscarlunadotdev/crwnClothing2021.png',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'E-Commerce Demo',
    url: 'http://lws-shopping-demo.herokuapp.com/',
    repo: 'https://github.com/oaluna/react-final-crwn-clothing',
    text:
      'This was a project I created learning react from the React Bootcamp on Udemy. This applications is a PWA that stores content with GraphQL and manages auth and item display using Redux. As a part of this project I also implemented a payment API using stripe-elements as well as stripe-js.'
  },
  {
    id: 4,
    category: 'E-Commerce Site',
    imageLarge:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617819253/oscarlunadotdev/lunasBigCommerce.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617819253/oscarlunadotdev/lunasBigCommerce.png',
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
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817991/oscarlunadotdev/globoMantics.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817991/oscarlunadotdev/globoMantics.png',
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
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817985/oscarlunadotdev/lwsLandingDemo.png',
    imageCard:
      'https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817985/oscarlunadotdev/lwsLandingDemo.png',
    logoImg: '../../assets/oscarArmandoLunaLogo.png',
    title: 'Landing Demo #2',
    url: 'https://lws-landing-demo.vercel.app',
    repo: 'https://lws-landing-demo',
    text:
      'I will be quite honest. I was bent on learning how that wonderful gradient mask on Stripe.com works. So after some reverse engineering I implemented the gradient webGL to a React application. Through building this application I also learned about Figma and how to generate web applications through prototypes and used a community file to create device mockups for it. Built using React.'
  }
];
export default projectsData;
