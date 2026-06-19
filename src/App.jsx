import React from 'react'

// importing components
import Images from './components/Images'
import Login from './components/Login'

// Main App component
const App = () => {
  return (
    // Main element
    <div className="flex min-h-screen items-center justify-center">
      {/* Initial 2 column grid setup. */}
      <div className="grid grid-cols-1 max-lg:w-full lg:grid-cols-2 m-4 border-2 border-slate-200 rounded-lg shadow-lg">
        
        {/* Left column with form. */}
        <Login />
        {/* Right Column with graphics */}
        <Images />

      </div>
    </div>
  )
}

export default App