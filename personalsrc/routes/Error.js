import React, {Component} from 'react';
import T from "prop-types";
import SE_Error from 'SE_Error'

class ErrorRoute extends Component {

  render() {
    const {params:{err}, location:{query:{url, error}}} = this.props
    return (
      <div>
        <SE_Error {...{err, url, error}}/>
      </div>
    )
  }
}

ErrorRoute.propTypes = {
  params: T.shape({
    err: T.string.isRequired,
  }).isRequired
};

export default ErrorRoute;