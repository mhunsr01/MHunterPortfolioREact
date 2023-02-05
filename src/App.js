import React from 'react';
import List from './components/Sidebar';
import Nav from './components/Nav';

// Import our list of users from users.js
import work from './work';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <List work={work} />
    </div>
  );
}
