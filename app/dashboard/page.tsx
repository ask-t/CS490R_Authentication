'use client'
import { useUser } from "@clerk/nextjs";
import React from 'react'

const DashboardPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <>
    <h1>dashboard page</h1>
      <div>
        <h1>User Profile</h1>
        {/* Access user attributes like first name, last name */}
        <p>Name: {user.firstName} {user.lastName}</p>
        {/* You can access other attributes in a similar way */}
        <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      </div>
    </>
  )
}

export default DashboardPage