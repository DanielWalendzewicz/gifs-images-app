import React from 'react';

import classes from './Card.css';

const Card = ({children}) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
