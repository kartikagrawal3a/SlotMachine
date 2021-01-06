import React from 'react';
import Heading from './Heading';
import Slot from './Slot';
const App = () => {
  return(
    <>
      <Heading />
      <div className="main">
        <Slot a='😄' b='😄' c='😄' />
        <Slot a='👍' b='🥇' c='😋' />
        <Slot a='👍' b='😋' c='😋' />
        <Slot a='🦓' b='🦓' c='⚡' />
        <Slot a='🧟' b='🦓' c='🧟' />
      </div>
    </>
  );
}

export default App;