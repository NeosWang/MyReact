import { connect } from 'react-redux'
import SumUI from '../../components/Sum'
import { createIncrementAction , createDecrementAction, createIncrementAsyncAction} from '../../redux/sum_action'


// the return as props to UI component
const mapStateToProps = (state) => {
  return { sum: state }
}


// function to manipulate props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => dispatch(createIncrementAction(data)),
    decrement: (data) => dispatch(createDecrementAction(data)),
    incrementAsync: (data,time)=> dispatch(createIncrementAsyncAction(data,time)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SumUI)