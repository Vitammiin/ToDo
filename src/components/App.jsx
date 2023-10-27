import React from 'react';
import ToDo from './ToDo/ToDo';
import Tomorrow from './Tomorrow/Tomorrow';

export const App = () => {
  return (
    <div>
      <div>
        <h1>Your Day</h1>
      </div>
      <ToDo />
      <Tomorrow />
    </div>
  );
};
