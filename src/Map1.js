import { useSelector } from 'react-redux';
import './App.css';

const Map1 = () => {
  const { search } = useSelector((state) => state.search);
  return (
    <iframe
      className='mapstyle'
      // google.maps.event.addDomListener(map, "click", function() {

      // });
      // onClick={mapEventHandler}
      onClick={() => console.log('You clicked me!')}
      loading='lazy'
      title='mapfromgoogle'
      src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyD-gjRucWyr93Ujs1ntgHst97ItSfhQ5PE
        &q=${search}+type=train_station+zoom=10
        `}></iframe>
  );
};

export default Map1;
