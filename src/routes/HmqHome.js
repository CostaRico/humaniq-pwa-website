import React, {Component} from 'react';
import HmqHomeContainer from 'containers/HmqHomeContainer'

import {fetchHmqStatistics} from 'store/entities/hmqStatistic/actions'
import {fetchGraphData} from 'store/entities/hmqGraph/actions'

class HmqHomeRoute extends Component {

  static prepareData({dispatch, getState}) {
    if(__SERVER__){
      return dispatch(fetchHmqStatistics())
    }else{
      const state = getState()
      state.hmqStatistic.loaded || dispatch(fetchHmqStatistics())
      return dispatch(fetchGraphData('1d'))
    }
  }

  render() {
    return (
      <div>
        <HmqHomeContainer />
      </div>
    )
  }
}

export default HmqHomeRoute;