import React, {Component} from 'react';
import HomeContainer_H from 'containers/HomeContainer_H'
import initialLoad from 'utils/initialLoad'

class HomeRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
  }

  render() {
    return (
      <HomeContainer_H />
    )
  }
}

export default HomeRoute;