import React, {Fragment} from 'react';
import classes from './GraphicsList.css';

const GraphicsList = ({gifs, images}) => {
  let graphicsList;
  if(images.length === 0 && gifs.length === 0) {
    graphicsList = null;
  } else {
    graphicsList = (
      <section className={classes.graphicsList}>
        {images.map(img => {
          return <img key={img.id} src={img.userImageURL} width="100" height="100"/>     
        })}
        {gifs.map(gif => {
          return <img key={gif.id} src={gif.images.fixed_height.url} width="100" height="100"/>    
        })}
     </section>
    );
  }

  return (
    <Fragment>
      {graphicsList}
    </Fragment>
  );
};

export default GraphicsList;
