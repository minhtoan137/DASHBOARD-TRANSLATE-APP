import React from 'react'

const TitleState = (props) => (
  <div className='title-state'>
    <div className='title'>{props.title}</div>
    <div className='state'>
      {props.children}
    </div>
  </div>
)

export { TitleState }
