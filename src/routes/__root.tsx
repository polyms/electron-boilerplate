import { NavigationMenu } from '@base-ui-components/react'
import { Home12Icon, ProfileIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavigationMenu.Root className='container mx-auto rounded-lg bg-gray-50 p-1 text-gray-900'>
        <NavigationMenu.List className='relative flex'>
          <NavigationMenu.Item>
            <Link className={triggerClassName} to='/'>
              <HugeiconsIcon icon={Home12Icon} size={24} color='currentColor' strokeWidth={1.5} />
              Home
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link className={triggerClassName} to='/about'>
              <HugeiconsIcon icon={ProfileIcon} size={24} color='currentColor' strokeWidth={1.5} />
              About
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const triggerClassName =
  '[&.active]:font-bold' +
  'box-border flex items-center justify-center gap-1.5 h-10 ' +
  'px-2 xs:px-3.5 m-0 rounded-md bg-gray-50 text-gray-900 font-medium ' +
  'text-[0.925rem] xs:text-base leading-6 select-none no-underline ' +
  'hover:bg-gray-100 active:bg-gray-100 data-[popup-open]:bg-gray-100 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative'
