import React from 'react';
import { getPriorityIcon } from '../utils/ticketUtils'; 
import { getPriorityLabel } from '../utils/ticketUtils'; 
import './TicketCard.css';

function TicketCard({ ticket, user }) {
  const priorityLabel = getPriorityLabel(ticket.priority); // Getting the label for the priority
  const priorityIcon = getPriorityIcon(priorityLabel); // Getting the icon for the priority

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
