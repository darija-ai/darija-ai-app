const TopNavigation = () => {
    return (
      <>
      <header className="fixed w-full bg-white/95 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-burgundy-600 font-bold text-2xl">Arabic<span className="text-burgundy-800">AI</span></span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="font-medium hover:text-burgundy-600 transition-colors">Features</a></li>
              <li><a href="#services" className="font-medium hover:text-burgundy-600 transition-colors">Services</a></li>
              <li><a href="#pricing" className="font-medium hover:text-burgundy-600 transition-colors">Pricing</a></li>
              <li><a href="#about" className="font-medium hover:text-burgundy-600 transition-colors">About</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 font-semibold text-burgundy-600 border-2 border-burgundy-600 rounded-lg hover:bg-burgundy-600 hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 font-semibold text-white bg-burgundy-600 border-2 border-burgundy-600 rounded-lg hover:bg-burgundy-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      </>
    )
  }
  
  export default TopNavigation