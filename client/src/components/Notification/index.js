import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'

const SUBSCRIBE_TODO_ADDED = gql`
  subscription {
    todoAdded {
      text
    }
  }
`

const Notification = () => {
  const { data, error, loading } = useSubscription(SUBSCRIBE_TODO_ADDED, {
    onSubscriptionData: () => handleNotification()
  })
  const [showNotification, setShowNotification] = useState(false)

  const handleNotification = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 4500);
  }

  if (error) return <p>error</p>
  if (loading) return <p>Waiting for new todo - I will notice it 👀</p>

  return (
    <>
      {showNotification ? (
        <div>
          <p>New task added! 🎉</p>
          <p>Remember about: {data.todoAdded.text}</p>
          <iframe src="https://giphy.com/embed/cbb8zL5wbNnfq" width="300" height="300" frameBorder="0"></iframe>
        </div>
      ) : null}
    </>
  )
}

export default Notification
