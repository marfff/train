import { useSelector } from 'react-redux';
import './App.css';

const Map = () => {
  const { search } = useSelector((state) => state.search);
  return (
    <iframe
      className='mapstyle'
      onClick={() => console.log('You clicked me!')}
      loading='lazy'
      title='mapfromgoogle'
      src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_KEY}
        &q=${search}+type=train_station+zoom=10`}></iframe>
  );
};

export default Map;
