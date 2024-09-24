import React from 'react';
import TicketCard from './TicketCard';
import './Column.css';
import { ReactComponent as ThreeDotMenu } from '../Icons/icons_FEtask/3 dot menu.svg';
import { ReactComponent as Add } from '../Icons/icons_FEtask/add.svg';
import { getStatusIcon } from '../utils/ticketUtils';
import { getPriorityIcon } from '../utils/ticketUtils';

function Column({ title, tickets, users }) {
  const StatusIcon = getStatusIcon(title); 
  const PriorityIcon = getPriorityIcon(title); 

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
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
