/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
  return (
    <header className="px-10 bg-blue-900 flex justify-center">
      <div className="container flex h-20 max-w-screen-xl">
        <div className="flex flex-1 items-center justify-start">
          <h1 className="text-white uppercase">header</h1>
        </div>
        <div className="flex flex-1 items-center justify-end lg:md:space-x-6 sm:space-x-3 ">
          <a
            href="/auth"
            className="text-sm font-medium text-white hover:text-gray-800 hover:duration-300"
          >
            Sign in
          </a>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <a
            href="#"
            className="text-sm font-medium text-white hover:text-gray-800 hover:duration-300"
          >
            Create account
          </a>
        </div>
      </div>
    </header>
  );
}
