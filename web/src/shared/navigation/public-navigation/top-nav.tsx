const TopNavigation = () => {
  return (
    <nav className="flex flex-row items-center justify-between w-full m-auto h-16 text-black">
      <header className="fixed w-full bg-orange-50 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <span className="font-bold text-2xl">Darija<span>AI</span></span>
          </div>    
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 font-semibold border-1 border-black rounded-lg hover:text-grey transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="px-4 py-2 font-semibold bg-burgundy-600 border-1 border-black rounded-lg hover:bg-burgundy-700 transition-colors cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default TopNavigation
