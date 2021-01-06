import React, {useContext} from 'react';
import {Context} from '../../types';

export const Home: React.FC = () => {
  let thisContext = useContext(Context)
  console.log(thisContext)
  return (
    <div>
      {thisContext?.posts?.[0]?.id}
    </div>
  );
};

