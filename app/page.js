// import React from 'react'
// import Home from './home/page'

// const page
//  = () => {
//   return (
//     <div>
// <Home/>
//     </div>
//   )
// }

// export default page


// app/page.jsx
import Home from './[region]/page';

export default function RootPage() {
  // Default to global
  return <Home params={{ region: 'global' }} />;
}
