import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(() => localStorage.getItem('groupBy') || 'status'); // Loading initial state from localStorage or default to 'status'
  const [sortOrder, setSortOrder] = useState(() => localStorage.getItem('sortOrder') || 'priority'); // Loading initial state from localStorage or default to 'priority'

  // Fetching tickets and users data
  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Save groupBy to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
  }, [groupBy]);

  // Save sortOrder to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sortOrder', sortOrder);
  }, [sortOrder]);

  return (
    <div className="App">
      <Header
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default App;