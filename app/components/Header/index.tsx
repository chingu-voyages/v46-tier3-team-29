import Link from '@/app/components/Link';

const Header = () => (
  <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex md:order-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="md:space-x-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
