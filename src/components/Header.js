// import React, { useState } from 'react';
// import './Header.css';
// // import { FaCircle, FaExclamationCircle } from 'react-icons/fa';
// import { ReactComponent as DisplayIcon} from '../Icons/icons_FEtask/Display.svg';
// import { ReactComponent as DownIcon} from '../Icons/icons_FEtask/down.svg';
// // import { useViewState } from '../utils/utils.js';

// function Header({ groupBy, setGroupBy, sortOrder, setSortOrder }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="app-header">
//       <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
//         <DisplayIcon/>
//         <span>Display</span>
//         <DownIcon/>
//       </div>
//       {isOpen && (
//         <div className="dropdown-menu">
//           <div className="dropdown-item">
//             <span>Grouping</span>
//             <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
//               <option value="status">Status</option>
//               <option value="user">User</option>
//               <option value="priority">Priority</option>
//             </select>
//           </div>
//           <div className="dropdown-item">
//             <span>Ordering</span>
//             <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//               <option value="priority">Priority</option>
//               <option value="title">Title</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as DisplayIcon } from '../Icons/icons_FEtask/Display.svg';
import { ReactComponent as DownIcon } from '../Icons/icons_FEtask/down.svg';

function Header({ groupBy, setGroupBy, sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  // Handles changes to the grouping selection and saves the state to localStorage
  const handleGroupByChange = (event) => {
    const newGroupBy = event.target.value;
    setGroupBy(newGroupBy);
    localStorage.setItem('groupBy', newGroupBy); // Save to localStorage
  };

  // Handles changes to the sorting selection and saves the state to localStorage
  const handleSortOrderChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    localStorage.setItem('sortOrder', newSortOrder); // Save to localStorage
  };

  return (
    <header className="app-header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <DisplayIcon />
        <span><b>Display</b></span>
        <DownIcon />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={groupBy} onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;