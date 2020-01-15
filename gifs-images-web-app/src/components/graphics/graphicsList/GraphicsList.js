import React from 'react';
import classes from './GraphicsList.css';

const GraphicsList = ({gifs, images}) => {
  return (
    <section className={classes.graphicsList}>
     {images.map(img => {
       return <img src={img.userImageURL} width="100" height="100"/>     
     })}
    {gifs.map(img => {
       return <img src={img.images.fixed_height.url} width="100" height="100"/>    
     })}
    </section>
  );
};

export default GraphicsList;
