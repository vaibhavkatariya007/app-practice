const BASE_URL = 'https://ro20s25kt6.execute-api.ap-south-1.amazonaws.com/dev/'

export const API = {
  userDetails: `${BASE_URL}user-details`,
  support: `${BASE_URL}support`
}

export const JSON_HEADER = { 'Content-Type': 'application/json' }

export const Services = {
  GET: endPoint => {
    return fetch(endPoint)
      .then(response => response.json())
      .then(result => result)
      .catch(err => err)
  },
  POST: (endPoint, data) => {
    const config = {
      method: 'POST',
      headers: Object.assign({}, JSON_HEADER),
      body: JSON.stringify(data)
    }
    return fetch(endPoint, config)
      .then(response => response.json())
      .then(result => result)
      .catch(err => err)
  }
}

export const Projects = [
  {
    title: 'Rick n Morty Characters',
    link: 'https://vaibhavkatariya007.github.io/ricknmorty/',
    image: '/project_1.png'
  },
  {
    title: 'Hacker News (SSR app)',
    link: 'https://ssr-hacker-news.herokuapp.com/',
    image: '/project_2.png',
    description:
      'Hacker News is a clone of hacker news this application is written in Node, Express and React. It is a server side rendering application for an experimenting purpose and to test the server side rendering capabilites of react library.'
  },
  {
    title: 'Tweet Searching App',
    link: 'http://tweet-searching-app.herokuapp.com/',
    image: '/project_3.png'
  },
  {
    title: 'Wiki Search App',
    link: 'https://vaibhavkatariya007.github.io/wiki-search',
    image: '/project_4.png',
    description:
      'Wiki Search app is a react appliction which is consuming opensource wiki apis. In this app you can search any article, and the data get fetched from the wikipedia apis.'
  },
  {
    title: 'Star Shopping Cart',
    link: 'https://vaibhavkatariya007.github.io/shopping-cart/',
    image: '/project_5.png',
    description:
      'Star Shopping is a ecommerce UI template created using react.js.'
  },
  {
    title: 'Awesome Video Player',
    link: 'https://vaibhavkatariya007.github.io/awesome-video-player/',
    image: '/project_6.png',
    description:
      'An Awesome Player application is a PWA written in pure javascript. This appliction is easily installable on any media (camera/mic) enabled devices. with this app you can capture videos, photos and download it in .mp4 and .png format respectively.'
  },
  {
    title: 'React Library',
    link: 'https://vaibhavkatariya007.github.io/my-react-lib/',
    image: '/project_7.png',
    description:
      'Its a javascript plugin created using react.js as a base library, and exposed as a pure javascript library that can be used in any non react appliction.'
  }
]

export const Skills = [
  {
    title: 'Javascript(ES6/ES7)',
    percentAge: 85
  },
  {
    title: 'React.Js',
    percentAge: 90
  },
  {
    title: 'Vue.Js',
    percentAge: 60
  },
  {
    title: 'Angular',
    percentAge: 60
  },
  {
    title: 'Node.Js',
    percentAge: 75
  }
]

export const Extras = [
  {
    title: 'HTML5',
    percentAge: 90
  },
  {
    title: 'CSS3',
    percentAge: 90
  },
  {
    title: 'Git',
    percentAge: 70
  },
  {
    title: 'AWS',
    percentAge: 40
  },
  {
    title: 'Docker',
    percentAge: 60
  }
]
