import { Link } from 'gatsby'
import React from 'react'
import { H1 } from '../components/md-page-elements'

export default function NotFound() {
  return (
    <>
      <H1>That's a nope!</H1>
      <Link to="/">Go to the homepage</Link>
    </>
  )
}
