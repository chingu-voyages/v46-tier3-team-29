import Link from '@/app/components/Link'
import Button from '@/app/components/Button'

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'About',
    path: '/about',
  },
]

const NavBar = () => {
  return (
    <nav className="bg-black dark:bg-black w-full border-b border-gray-200 dark:border-gray-600 h-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
          <Button textContent="Login" className="text-black" />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="md:space-x-8 font-semibold">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="text-white text-lg"
              >
                {route.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
