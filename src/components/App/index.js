import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  newItemTitle: 'newItemTitle',
  items: 'items'
}, function App (props) {
  function onFormSubmit (event) {
    event.preventDefault()
    props.signals.newItemTitleSubmitted()
  }

  function onInputChange (event) {
    props.signals.newItemTitleChanged({
      title: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={props.newItemTitle}
          onChange={onInputChange}
        />
      </form>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})
