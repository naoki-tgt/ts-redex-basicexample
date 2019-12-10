import {Dispatch} from 'redux';
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Action'
import Link from '../components/Link'
import { ToDoState , VisibilityFilter} from '../types'

interface IOwnProps {
    filter : VisibilityFilter;
}

const mapStateToProps = (state : ToDoState, ownProps : IOwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch : Dispatch, ownProps : IOwnProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)