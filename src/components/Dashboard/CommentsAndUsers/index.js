import React from 'react';
import { Row, Col } from 'reactstrap/';
import { v4 as uuidv4 } from 'uuid';

import './style.scss';

export default function CommentsAndUsers() {
  const data = {
    comments: [
      {
        name: 'Jack Sparrows',
        lastActive: 5,
        isActive: true,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
      {
        name: 'Elon Musk',
        lastActive: 5,
        isActive: true,
        text: 'Lorem ipsum dolor.',
        img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        lastActive: 5,
        isActive: false,
        text: 'Lorem ipsum dolor sit ',
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        lastActive: 5,
        isActive: false,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
    ],
    users: [
      {
        name: 'Don Corleone',

        isActive: true,
        img: 'https://pbs.twimg.com/profile_images/1093639847250722816/-A8kf6-1_400x400.jpg',
        id: uuidv4(),
      },
      {
        name: 'Joker',
        isActive: false,
        img: 'https://media.karousell.com/media/photos/products/2021/2/15/swtoys_vinyl_studiojoker_clown_1613350044_73f8a746.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        isActive: false,
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        isActive: true,
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        isActive: true,
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
      {
        name: 'Jack Sparrows',
        isActive: false,
        img: 'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
        id: uuidv4(),
      },
    ],
  };

  return (
    <div className='commentsAndUsersWrapper'>
      <Row className='usersContainer'>
        <Col className='userSection' sm='5'>
          <p className='headingTitle'>Top Comments</p>

          {data?.comments.map((comment) => (
            <Row className='usersRow' key={comment.id}>
              <Col sm='3'>
                <img className='userImage' src={comment.img} alt='' />
                {comment.isActive ? <span className='isActive'></span> : <span className='disActive'></span>}
              </Col>
              <Col sm='8'>
                <p style={{ fontWeight: 'bold' }}>{comment.name}</p>
                <div className='lastActive'>
                  {comment.isActive? <p>online</p>  : comment.lastActive +'hours ago'} 
                </div>
                <p>{comment.text}</p>
              </Col>
            </Row>
          ))}
        </Col>
        {/* users */}
        <Col sm='5' className='userSection'>
          <p className='headingTitle'>Users</p>

          {data?.users.map((user) => (
            <Row className='usersRow' key={user.id}>
              <Col sm='3'>
                <img className='userImage'  src={user.img} alt='' />
              </Col>
              <Col sm='8'>
                <p style={{ fontWeight: 'bold' }}>{user.name}</p>
                {user.isActive ? 
                <div className='activeUserWrapper'>
                <span className='activeUser'></span>
                <p>online</p>
                </div>
                
                 : 
                  <div className='activeUserWrapper'>
                <span className='disActiveUser'></span>
                <p>offline</p>
                </div>}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}
