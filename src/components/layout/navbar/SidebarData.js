import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIconsV5 from 'react-icons/io5/';
import * as MdIcons from 'react-icons/md/';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiOutlineBarChart />,
  },
  {
    title: 'Advisors',
    path: '/advisors',
    icon: <BsIcons.BsFillPersonLinesFill />,
  },
  {
    title: 'My Documents',
    path: '/my-documents',
    icon: <IoIconsV5.IoDocumentsOutline />,
  },
    {
    title: 'News feed',
    path: '/news-feed',
    icon: <MdIcons.MdOutlineWifiTethering />,
  },
    {
    title: 'Support',
    path: '/support',
    icon: <BsIcons.BsTelephone />,
  },

];