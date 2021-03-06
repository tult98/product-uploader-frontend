import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import NavigationItem from '~/components/layouts/SideBarNavigation/NavigationItem'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'
import { NAVIGATION_PATHS } from '~/utils/routes'

const navigationItems = [
  {
    key: 'home',
    label: 'Home',
    path: NAVIGATION_PATHS.HOME,
  },
  {
    key: 'templates',
    label: 'Templates',
    children: [
      {
        key: 'all_template',
        label: 'All templates',
        path: NAVIGATION_PATHS.TEMPLATES,
      },
      {
        key: 'create_template',
        label: 'New template',
        path: NAVIGATION_PATHS.CREATE_TEMPLATE,
      },
    ],
  },
  {
    key: 'stores',
    label: 'Stores',
    children: [
      {
        key: 'all_store',
        label: 'All stores',
        path: NAVIGATION_PATHS.STORES,
      },
      {
        key: 'create_store',
        label: 'New store',
        path: NAVIGATION_PATHS.CREATE_STORE,
      },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    children: [
      {
        key: 'all_user',
        label: 'All users',
        path: NAVIGATION_PATHS.USERS,
      },
      {
        key: 'create_user',
        label: 'New user',
        path: NAVIGATION_PATHS.CREATE_USER,
      },
    ],
  },
  {
    key: 'logout',
    label: 'Logout',
  },
]

const INITIAL_TAB = 'home'

const SidebarNavigation = () => {
  const { tab }: Record<string, unknown> = useParams()
  const [activeTab, setActiveTab] = useState<string>((tab || INITIAL_TAB) as string)
  const me = useRecoilValue(getCurrentUser)

  return (
    <div className="top-0 left-0 flex flex-col justify-between h-screen text-gray-200 bg-gray-800 min-w-300px w-fit">
      <div className="pt-10 pb-8 overflow-y-auto">
        {navigationItems.map((item) => (
          <NavigationItem key={item.key} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>
      <div className="bottom-0 flex flex-row py-4 pl-4 text-white bg-gray-700">
        <img
          src="https://giaithuongtinhnguyen.vn/dien-vien-fukuda/imager_7350.jpg"
          alt="avatar"
          className="object-cover w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="font-medium">{me.username}</p>
          <p className="text-sm">View profile</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarNavigation
