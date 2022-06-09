import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FaIcons.FaHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: 'Tokenomics',
    path: '/tokenomics',
    icon: <FaIcons.FaMoneyBill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Main paper',
        path: '/tokenomics/tokenomics',
        icon: <FaIcons.FaPaperclip />
      },

      {
        title: 'Graphics',
        path: '/tokenomics/grafica',
        icon: <FaIcons.FaChartArea />
      },
      {
        title: 'Fee Market',
        path: '/tokenomics/feemarket',
        icon: <FaIcons.FaFileExport />
      }
    ]
  },
  {
    title: 'Documents',
    path: '/inventario',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'White-paper',
        path: '/docs/whitepaper',
        icon: <FaIcons.FaBitcoin />,
        cName: 'sub-nav'
      },
      {
        title: 'About us',
        path: '/aboutus',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  
  {
    title: 'Social Media',
    path: '/social',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    icon: <IoIcons.IoMdPeople />,

  }
];