import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  DotsCircleHorigontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div>
      <img src="https://links.papareact.com/drq" alt="" className="w-10 h-10" />
      <SidebarRow Icon={HomeIcon} title="Home" />
    </div>
  );
}

export default Sidebar;
