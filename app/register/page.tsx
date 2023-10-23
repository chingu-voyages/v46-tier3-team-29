import React from 'react'

const register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96"> {/* Adjust the width here */}
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input type="text" id="username" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" className="w-full p-2 border rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  )
}

export default register