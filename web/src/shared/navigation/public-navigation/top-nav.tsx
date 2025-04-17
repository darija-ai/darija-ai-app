import { useNavigate } from "@tanstack/react-router"

const TopNavigation = () => {

  const navigate = useNavigate()
  return (
    <nav className="flex flex-row items-center justify-between w-full m-auto h-16 text-black">
      <header className="fixed w-full bg-orange-50 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div onClick={() => navigate({ to: '/' })} className="flex items-center cursor-pointer">
            <span className="font-bold text-2xl">Darija<span>AI</span></span>
          </div>
          <div className="flex items-center space-x-12">
            <button onClick={() => navigate({ to: '/sign-up' })} className="font-semibold bg-burgundy-600  border-black rounded-lg hover:bg-burgundy-700 transition-colors cursor-pointer">
              Sign In
            </button>
            <button onClick={() => navigate({ to: '/sign-in' })} className="px-8 py-2 cursor-pointer rounded-full relative bg-sky-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border-0">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">
                Sign Up
              </span>
            </button>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default TopNavigation
