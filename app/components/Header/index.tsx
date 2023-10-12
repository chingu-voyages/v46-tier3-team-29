import Link from '@/app/components/Link';
import Button from '@/app/components/Button';

const Header = () => (
  <nav className="bg-white dark:bg-black w-full border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex md:order-2">
        <Button textContent="Login" />
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
