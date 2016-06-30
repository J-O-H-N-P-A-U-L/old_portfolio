/* eslint-disable global-require */
import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Page from '../Page/PageComponent';
import styles from './Portfolio.scss';

export default class Portfolio extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <Page heading='Portfolio'>
        <Grid>
          {this.props.viewer.works.edges.map(edge => {
            const imageUrl = require(`../../assets/${edge.node.name.toLowerCase()}.gif`);
            return (
              <Cell col={12} key={edge.node.id}>
                <Card shadow={0} className={styles.card}>
                  <CardTitle className={styles.image} style={{ background: `url(${imageUrl})` }}>{edge.node.name}</CardTitle>
                  <CardText>
                  {edge.node.description}
                  </CardText>
                  <CardActions border>
                    <Button colored href={edge.node.url} target='_blank'>Visit Site</Button>
                  </CardActions>
                  <CardMenu style={{ color: '#fff' }}>
                    <IconButton name='share' />
                  </CardMenu>
                </Card>
              </Cell>
            );
          })}
        </Grid>
      </Page>
    );
  }
}
