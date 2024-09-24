// import React from 'react';
import BacklogIcon from '../Icons/icons_FEtask/Backlog.svg';
import TodoIcon from '../Icons/icons_FEtask/To-do.svg';
import InProgressIcon from '../Icons/icons_FEtask/in-progress.svg';
import DoneIcon from '../Icons/icons_FEtask/Done.svg';
import CancelledIcon from '../Icons/icons_FEtask/Cancelled.svg';


import UrgentIcon from '../Icons/icons_FEtask/SVG - Urgent Priority colour.svg';
import HighIcon from '../Icons/icons_FEtask/Img - High Priority.svg';
import MediumIcon from '../Icons/icons_FEtask/Img - Medium Priority.svg';
import LowIcon from '../Icons/icons_FEtask/Img - Low Priority.svg';
import NoPriorityIcon from '../Icons/icons_FEtask/No-priority.svg';

export const groupTickets = (tickets, users, groupBy, sortOrder) => {
    // Initializing the grouped object based on the grouping criteria
    const grouped = {};
  
    // If grouping by status, ensuring "Done" and "Canceled" are present even if empty
    if (groupBy === 'status') {
      grouped['Backlog'] = [];
      grouped['Todo'] = [];
      grouped['In progress'] = [];
      grouped['Done'] = [];
      grouped['Canceled'] = [];
    }
  
    // Iterating over the tickets and grouping them accordingly
    tickets.forEach(ticket => {
      let key;
      switch (groupBy) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          const user = users.find(u => u.id === ticket.userId);
          key = user ? user.name : 'Unassigned';
          break;
        case 'priority':
          key = getPriorityLabel(ticket.priority);
          break;
        default:
          key = 'Other';
      }
  
      // Initializing the group if it does not exist
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      // Adding the ticket to the appropriate group
      grouped[key].push(ticket);
    });
  
    // Defining the correct order for priority groups
    const priorityOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
  
    // Sorting tickets within each group based on sortOrder
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sortOrder === 'priority') {
          // Using the index of priority levels for correct sorting
          const priorityA = priorityOrder.indexOf(getPriorityLabel(a.priority));
          const priorityB = priorityOrder.indexOf(getPriorityLabel(b.priority));
          return priorityA - priorityB;
        } else {
          // Default alphabetical sorting by title
          return a.title.localeCompare(b.title);
        }
      });
    });
  
    // If grouping by priority, reorder the groups to match priorityOrder
    if (groupBy === 'priority') {
      const orderedGrouped = {};
      priorityOrder.forEach(priority => {
        if (grouped[priority]) {
          orderedGrouped[priority] = grouped[priority];
        }
      });
      return orderedGrouped;
    }
  
    return grouped;
  };
  
  
  // Function to map priority numbers to their corresponding labels
  export const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      default: return 'No priority';
    }
  };
  
  export const getPriorityIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'urgent' : return UrgentIcon;
      case 'high': return  HighIcon;
      case 'medium': return MediumIcon;
      case 'low': return LowIcon;
      case 'no priority': return NoPriorityIcon ;
    }
  };

  
  // Function to map status strings to their corresponding icons
  export const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'backlog' : return BacklogIcon;
      case 'todo': return  TodoIcon;
      case 'in progress': return InProgressIcon;
      case 'done': return DoneIcon;
      case 'canceled': return CancelledIcon ;
    }
  };
  
