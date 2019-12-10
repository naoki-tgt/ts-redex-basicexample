import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Action'
import {Dispatch} from 'redux'

const AddTodo : React.FC<{dispatch:Dispatch}>= ({ dispatch }) => {
  let inputRef = React.createRef<HTMLInputElement>();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if(!inputRef.current)
            return;
          if (!inputRef.current.value.trim()) {
            return
          }
          dispatch(addTodo(inputRef.current.value))
          inputRef.current.value = ''
        }}
      >
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)