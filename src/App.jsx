import React from 'react'

const App = () => {
  return (
    // Main element
    <>
      {/* Initial 2 column grid setup. */}
      <div class="grid grid-cols-2">
        <div class="bg-blue-500 p-4 text-white">Column 1</div>
        <div class="bg-green-500 p-4 text-white">Column 2</div>
      </div>
    </>
  )
}

export default App