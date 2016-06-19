class User {
  constructor(id, name, username, website) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
  }
}

class Feature {
  constructor(id, name, description, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
  }
}

class Work {
  constructor(id, name, description, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
  }
}

const jp = new User('1', 'John Paul Hunter', 'jp', 'https://github.com/jp/relay-fullstack');
const features = [
  new Feature('1', 'React', 'A JavaScript library for building user interfaces.', 'https://facebook.github.io/react'),
  new Feature('2', 'Relay', 'A JavaScript framework for building data-driven react applications.', 'https://facebook.github.io/relay'),
  new Feature('3', 'GraphQL', 'A reference implementation of GraphQL for JavaScript.', 'http://graphql.org'),
  new Feature('4', 'Express', 'Fast, unopinionated, minimalist web framework for Node.js.', 'http://expressjs.com'),
  new Feature('5', 'Webpack', 'Webpack is a module bundler that packs modules for the browser.', 'https://webpack.github.io'),
  new Feature('6', 'Babel', 'Babel is a JavaScript compiler. Use next generation JavaScript, today.', 'https://babeljs.io'),
  new Feature('7', 'PostCSS', 'PostCSS. A tool for transforming CSS with JavaScript.', 'http://postcss.org'),
  new Feature('8', 'MDL', 'Material Design Lite lets you add a Material Design to your websites.', 'http://www.getmdl.io')
];

const works = [
  new Work('1', 'JB Hi-Fi', 'The JB Hi-FI Retail Site.', 'http://www.jbhifi.com.au'),
  new Work('2', 'JB HiFi Solutions', 'JB Hi-Fi commercial deivision .', 'http://www.jbhifi.com.au/solutions'),
  new Work('3', 'Colorado', 'The Colorado web store.', 'http://www.colorado.com.au'),
  new Work('4', 'Jag', 'The Jag Retail website.', 'http://www.jag.com.au'),
  new Work('5', 'Williams', 'The Williams Retail website.', 'https://www.williamsshoes.com.au'),
  new Work('6', 'Mathers', 'Mathers Retail web store.', 'https://www.mathers.com.au'),
  new Work('7', 'Diana Ferrari', 'Diana Ferrari e-Boutique.', 'http://www.dianaferrari.com.au'),
  new Work('8', 'Betstar', 'Betstar propietary online wagering application.', 'http://www.betstar.com.au')
];


function getUser(id) {
  return id === jp.id ? jp : null;
}

function getFeature(id) {
  return features.find(w => w.id === id);
}

function getFeatures() {
  return features;
}

function getWork(id) {
  return works.find(w => w.id === id);
}

function getWorks() {
  return works;
}

export {
  User,
  Feature,
  Work,
  getUser,
  getFeature,
  getFeatures,
  getWork,
  getWorks
};
