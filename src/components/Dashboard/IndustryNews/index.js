import React from 'react';
import Paginate from './Paginate';
export default function IndustryNews() {
  const data = [
    {
      id: 1,
      header: 'The standard Lorem Ipsum passage, used since the 1500s',
      date: '2021',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      header: 'The standard Lorem Ipsum passage, used since the 1500s',
      date: '2021',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      header: 'The standard Lorem Ipsum passage, used since the 1500s',
      date: '2021',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  return (
    <div style={{ height: '598px', border: '1px solid #D9D9D9', padding: '34px 30px 17px 30px' }}>
      <p className='headingTitle'>Industry News</p>
      <Paginate pageSize={data.length} pageCount={data.length} currentPage={0} data={data} />
    </div>
  );
}
