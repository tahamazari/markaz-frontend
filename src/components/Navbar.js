import { Link } from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


import { isLoggedIn } from "../utils"
import { Button } from "."

export const Navbar = () => {

  const { location: { pathname } } = window

  const onLogout = () => {
    localStorage.clear()
    window.location.href = "/login"
  }

  const routes = [
    ...(
      isLoggedIn() ? [
        {
          to: "/dashboard",
          label: 'Dashboard'
        },
        {
          to: "/profile",
          label: 'Profile'
        },
        {
          to: "/settings",
          label: 'Settings'
        }
      ] : 
      [
        {
          to: "/login",
          label: 'Login'
        }
      ]
    )
  ]

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="bg-white shadow">
            <div className="mx-auto max-w-7xl">
              <div className="relative flex sm:h-16 h-4 justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {
                      routes.map(({ to, label }, index) => {
                        return(
                          <Link 
                            key={index} 
                            to={to} 
                            className={`inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 ${pathname.includes(to) && 'border-b-2 border-indigo-500'}`}>
                            {label}
                          </Link>
                        )
                      })
                    }
                  </div>
                </div>
                {
                  isLoggedIn() &&
                  <div className="items-center px-1 pt-1 text-sm font-medium text-gray-900 sm:inline-flex hidden">
                    <Button 
                      label="Logout"
                      onClick={onLogout}
                    />
                  </div> 
                }
              </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {
              routes.map(({ to, label }, index) => {
                return(
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={to}
                    className={`block ${pathname.includes(to) && 'border-l-2 border-indigo-500 bg-indigo-50'}  py-2 pl-3 pr-4 text-base font-medium text-indigo-700`}
                  >
                      {label}
                    </Disclosure.Button>
                )
              })
            }
            {
              isLoggedIn() &&
              <div className="w-full flex justify-center items-center">
                <div className="w-[200px] py-[20px]">
                  <Button label="Logout" onClick={onLogout} />
                </div>
              </div>
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}