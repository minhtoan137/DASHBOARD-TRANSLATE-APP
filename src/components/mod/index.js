import React, { Component } from 'react'
import gql from 'graphql-tag'

import { WrapQuery } from '../util'

class Mod extends Component {
  render () {
    console.log(this.props)
    return (
      <>
        Mod
      </>
    )
  }
}

const usersByType = gql`
  query getData($type: String){
    usersByType(type: $type){
      _id
      username
      password
      imageUrl
      firstname
      lastname
      fullname
      isEnabled
      blockTime
      score
      profileId
      createdAt
      createdBy {
          _id
          username
      }
      dateOfBirth
      gender
      email
      mobile
      address
      degree
      school
      experience
      specialist {
          _id
          name
      }
      specialized {
          _id
          name
      }
      certificateImages
    }
    specialists {
      _id 
      name
    }
  }
`

const ModQuery = (props) => {
  const Component = WrapQuery({
    query: usersByType,
    variables: {
      type: 'mod'
    },
    Component: Mod
  })
  return <Component {...props} />
}

export default ModQuery
