import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className="flex flex-col">
      <img src="https://links.papareact.com/drq" alt="" className="w-10 h-10" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sing In" />

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
