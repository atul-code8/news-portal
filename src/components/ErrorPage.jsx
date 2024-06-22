import React from 'react'
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='text-gray-200 h-screen w-full flex flex-col items-center pt-40'>
      <h1 className='text-3xl font-medium'>Oops! {error.status}</h1>
      <p>{error.error.message}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' className='text-sm font-sans font-medium mt-6'>← Back to home</Link>
    </div>
  );
}