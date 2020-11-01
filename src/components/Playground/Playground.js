import React from 'react';
import '../../css/playground.css';

const data = {
  name: 'กิ๊ฟ',
  detailLink: 'https://people.mthai.com/starthai/8916.html',
  birthDay: 508784400,
  images: [
    'https://img-ha.mthcdn.com/7YGfPJ6KcltZBC0SiBp-Vo1ku4g=/200x200/smart/people.mthai.com/app/uploads/2016/11/162.jpg',
    'https://people.mthai.com/app/uploads/2016/11/172-260x300.jpg',
    'https://people.mthai.com/app/uploads/2016/11/109-300x203.jpg',
    'https://people.mthai.com/app/uploads/2016/11/130-238x300.jpg',
    'https://people.mthai.com/app/uploads/2016/11/213-269x300.jpg',
  ],
};
export default function Playground() {
  return (
    <div className="playground">
      <div className="playground-profile">
        <img src={data.images[3]} alt="" />
      </div>
    </div>
  );
}
