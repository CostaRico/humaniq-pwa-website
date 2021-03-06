import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {submit} from 'store/entities/simpleForms/actions'
import SE_SimpleForm from 'SE_SimpleForm'

function mapStateToProps(state) {
  const {navigation:{openRoute}} = state
  const page = openRoute[1] || 'subscribe'
  return {page};
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({submit}, dispatch)
  return {...actions};
}

function mergeProps(stateProps, dispatchProps){

  const {page} = stateProps
  const {submit} = dispatchProps
  const handleSubmit = (data) => {
    submit(page, data)
  }

  return {...stateProps, handleSubmit}
}


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SE_SimpleForm);