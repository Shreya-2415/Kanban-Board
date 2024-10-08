import React from 'react';
import Column from './Column';
import { groupTickets, getStatusIcon } from '../utils/ticketUtils';
import './KanbanBoard.css';

function KanbanBoard({ tickets, users, groupBy, sortOrder }) {
  const groupedTickets = groupTickets(tickets, users, groupBy, sortOrder);
  const columnKeys = Object.keys(groupedTickets);

  return (
    <div className="kanban-board">
      {columnKeys.map((key) => (
        <Column
          key={key}
          title={key}
          icon={getStatusIcon(key)}
          tickets={groupedTickets[key] || []}
          users={users}
          count={groupedTickets[key]?.length || 0}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
