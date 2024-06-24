import React from 'react';
import { Link } from 'react-router-dom';
// Style Connection
import './Messages.css';

const Messages = () => {
  const message = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi ipsam optio distinctio? Tempora, architecto dicta? Accusantium qui modi nemo quisquam ad, pariatur vitae?`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className="active">
            <td>Anna Bell</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 Day Ago</td>

            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr className="active">
            <td>John Doe</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 hours ago</td>

            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr>
            <td>Elinor Good</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 day ago</td>
          </tr>

          <tr>
            <td>Garner David </td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 days ago</td>
          </tr>

          <tr>
            <td>Troy Oliver</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
