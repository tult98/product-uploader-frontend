import React from 'react'
import { useRecoilValue } from 'recoil'
import NotFound from '~/components/screens/NotFound'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'

const NotFound404Page = () => {
  const me = useRecoilValue(getCurrentUser)

  return (
    <>
      <header>
        <title>Product Uploader | 404</title>
      </header>
      <NotFound
        statusCode={404}
        title="Page not found"
        message="Please check the URL in the address bar and try again."
        positionStyle={me ? 'center-in-main-content' : null}
      />
    </>
  )
}

export default NotFound404Page
