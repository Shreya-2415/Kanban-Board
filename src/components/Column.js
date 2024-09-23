// import React from 'react';
// import TicketCard from './TicketCard';
// // import { FaPlus, FaEllipsisH } from 'react-icons/fa';
// import './Column.css';
// import { ReactComponent as ThreeDotMenu } from '../Icons/icons_FEtask/3 dot menu.svg';
// import { ReactComponent as Add } from '../Icons/icons_FEtask/add.svg';
// // import {ReactComponent as BacklogIcon} from '../Icons/icons_FEtask/Backlog.svg';
// import { getStatusIcon } from '../utils/ticketUtils';


// function Column({ title, tickets, users }) {
//   return (
//     <div className="column">
//       <div className="column-header">
//         <div className="column-title">
//            <getStatusIcon/>
//           <span>{title}</span>
//           <span className="ticket-count">{tickets.length}</span>
//         </div>
//         <div className="column-actions">
//           <Add />
//           <ThreeDotMenu />
//         </div>
//       </div>
//       <div className="ticket-list">
//         {tickets.map(ticket => (
//           <TicketCard key={ticket.id} ticket={ticket} user={users.find(u => u.id === ticket.userId)} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Column;

import React from 'react';
import TicketCard from './TicketCard';
import './Column.css';
import { ReactComponent as ThreeDotMenu } from '../Icons/icons_FEtask/3 dot menu.svg';
import { ReactComponent as Add } from '../Icons/icons_FEtask/add.svg';
import { getStatusIcon } from '../utils/ticketUtils';
import { getPriorityIcon } from '../utils/ticketUtils';
// import { useViewState } from '../utils/utils.js';

function Column({ title, tickets, users }) {
  // Call getStatusIcon based on the column title (or status)
  const StatusIcon = getStatusIcon(title); // Assuming title is a status like 'todo', 'done', etc.
  const PriorityIcon = getPriorityIcon(title); // Assuming title is a status like 'todo', 'done', etc.

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {/* Render the status icon if available */}
          {StatusIcon && (
            <img 
              src={StatusIcon} 
              alt={`${title} icon`} 
              style={{ width: 20, height: 20, marginRight: 8, marginLeft: 10}}
            />
          )}
          {PriorityIcon && (
            <img 
              src={PriorityIcon} 
              alt={`${title} icon`} 
              style={{ width: 20, height: 20, marginRight: 8 , marginLeft: 10}}
            />
          )}
          <span style = {{marginLeft: 8}}><b>{title}</b></span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <Add />
          <ThreeDotMenu />
        </div>
      </div>
      <div className="ticket-list">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} user={users.find(u => u.id === ticket.userId)} />
        ))}
      </div>
    </div>
  );
}

export default Column;
