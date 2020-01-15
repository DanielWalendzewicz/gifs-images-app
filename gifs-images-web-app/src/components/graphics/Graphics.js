import React, { useState, useCallback, Fragment, useMemo } from 'react';

import GraphicsSearcher from './graphicsSearcher/GraphicsSearcher'
import GraphicsList from './graphicsList/GraphicsList';

const Graphics = () => {
  const [images, setImages] = useState([]);
  const [gifs, setGifs] = useState([]);

  const filteredImagesHandler = useCallback(filteredImages => {
      setImages(filteredImages)
  }, []);

  const filteredGifsHandler = useCallback(filteredGifs => {
      setGifs(filteredGifs)
  }, []);

  const graphicsList = useMemo(() => {
    return (
      <GraphicsList
        images={images}
        gifs={gifs}
      />
    );
  }, [gifs, images]);

  return (
    <Fragment>
      <GraphicsSearcher
      setFilteredImages={filteredImagesHandler}
      setFilteredGifs={filteredGifsHandler}
      />
      {graphicsList}
    </Fragment>
  );
};

export default Graphics;
