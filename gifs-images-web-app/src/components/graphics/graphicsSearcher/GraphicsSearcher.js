import React, {useState, useEffect, useRef} from 'react';
import classes from './GraphicsSearcher.css'
import Card from '../../UI/card/Card'

const GraphicsSearcher = React.memo(props => {
  const { setFilteredImages, setFilteredGifs } = props;  
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (enteredFilter.length >= 3) {
      const timer = setTimeout(() => {
       if (enteredFilter === inputRef.current.value) {
        fetch(`/api/pixabay/images/${enteredFilter}`)
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            console.log(responseData)
            setFilteredImages(responseData);
        });
        fetch(`/api/giphy/gifs/${enteredFilter}`)
        .then(response => {
            return response.json();
        })
        .then(responseData => {
            console.log(responseData)
            setFilteredGifs(responseData);
        });
       }
      }, 300);
      return () => {
          clearTimeout(timer);
      };
    }
  }, [enteredFilter, inputRef, setFilteredImages, setFilteredGifs]);

  return (
    <section className={classes.search}>
      <Card>
        <div className={classes.searchInput}>
          <label>Search your Gifs and Images</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={e => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
    );
});

export default GraphicsSearcher;
