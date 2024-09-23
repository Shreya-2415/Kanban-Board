// import React from 'react';
// // import { FaCircle, FaExclamationCircle } from 'react-icons/fa';
// import './TicketCard.css';
// // import {FaCircle, FaExclamationCircle } from 'react-icons/fa';

// function TicketCard({ ticket, user }) {
//   const priorityIcons = ['', '!', '!!', '!!!'];

//   return (
//     <div className="ticket-card">
//       <div className="ticket-header">
//         <span className="ticket-id">{ticket.id}</span>
//         {user && (
//           <div className="user-avatar" title={user.name}>
//             {user.name[0].toUpperCase()}
//           </div>
//         )}
//       </div>
//       <div className="ticket-title">
//         {/* <FaCircle className="status-icon" /> */}
//         <span>{ticket.title}</span>
//       </div>
//       <div className="ticket-footer">
//         <span className="priority-icon" title={`Priority ${ticket.priority}`}>
//           {/* {ticket.priority > 0 ? <getPriorityIcon /> : <FaCircle />} */}
//         </span>
//         <div className="ticket-tags">
//           {ticket.tag.map((tag, index) => (
//             <span key={index} className="tag">
//               {/* <FaCircle className="tag-icon" /> */}
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TicketCard;

import React from 'react';
import { getPriorityIcon } from '../utils/ticketUtils'; // Make sure this path is correct based on your project structure
import { getPriorityLabel } from '../utils/ticketUtils'; // Make sure this path is correct based on your project structure
import './TicketCard.css';
import { useViewState } from '../utils/utils.js';

function TicketCard({ ticket, user }) {
  const priorityLabel = getPriorityLabel(ticket.priority); // Get the label for the priority
  const priorityIcon = getPriorityIcon(priorityLabel); // Get the icon for the priority

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar" title={user.name}>
            {user.name[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className="ticket-title">
        <span>{ticket.title}</span>
      </div>
      <div className="ticket-footer">
        <span className="priority-icon" title={`Priority ${priorityLabel}`}>
          {priorityIcon && (
            <img src={priorityIcon} alt={`Priority ${priorityLabel}`} className="priority-icon-image" />
          )}
        </span>
        <div className="ticket-tags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
