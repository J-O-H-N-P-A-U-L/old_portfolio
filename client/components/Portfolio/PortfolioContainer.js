import Relay from 'react-relay';
import Portfolio from './PortfolioComponent';

export default Relay.createContainer(Portfolio, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        works(first: 10) {
          edges {
            node {
              id
              name
              description
              url
            }
          }
        }
      }`
  }
});
