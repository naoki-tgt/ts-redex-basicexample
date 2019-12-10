import React,{FC} from 'react';
import FilterLink from '../containers/FilterLink';

import { VisibilityFilter } from '../types'

const Footer : FC = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer
