import stations from './stations.json';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tipcoding } from './SearchSlice';
import firebase from './firebase';
import './App.css';
import logo from './images/train.png';
import 'firebase/firestore';
// import stationslist from './firebase-stations.json'

const db = firebase.firestore();

let stationsview = stations;
console.log('STATIONS', stations);
console.log('STATIONNAME', stationsview.StationName);

db.collection('stations')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  });

//     "StationName": "Bexhill",
//     "TiplocCode": "BEXHILL",
//     "CrsCode": "BEX"

let ipgeo =
  'https://api.ipgeolocation.io/ipgeo?apiKey=0f6d2831fba64e428c27b1bad0aa7b74';

const Convertor = () => {
  // useEffect(() => {
  //   stationsview.forEach(function (obj) {
  //     db.collection('stations').doc(obj.TiplocCode).set({
  //       id: obj.StationName,
  //       stationName: obj.StationName,
  //       TiplocCode: obj.TiplocCode,
  //       CrsCode: obj.CrsCode

  //     }).then(function (docRef) {
  //       console.log('doc written' + docRef.id)
  //     }).catch(function (error) {
  //       console.log('error: ' + error)
  //     })
  //   })
  // }, [])

  // const [isLoaded, setIsLoaded] = useState('false');
  const [tiploc, settiploc] = useState('CHTSEY');
  const [input1, setInput1] = useState('Chertsey');
  const [city, setcity] = useState('');

  useEffect(() => {
    dispatch(tipcoding(city));
    let creation = ('creation', CreateStation(city));
    creation.stationindex && settiploc(creation.stationindex.TiplocCode);
  }, [city]);

  useEffect(() => {
    fetch(ipgeo)
      .then((response) => response.json())
      .then((data3) => {
        // console.log(data3);
        setcity(data3.city);
        dispatch(tipcoding(city));
      });
  }, [city]);

  const handleChange = (e) => {
    setInput1(e.target.value);
  };
  const dispatch = useDispatch();

  const CreateStation = (name) => {
    const stationindex = stations.find(function (element, index) {
      return element.StationName.toLowerCase() === name.toLowerCase();
    });
    return { stationindex };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let result = CreateStation(input1);
    settiploc(result.stationindex.TiplocCode);
    dispatch(tipcoding(input1));
  };

  return (
    <div className='stationentry'>
      <img className='trainimage' src={logo} alt='logo'></img>
      <div className='entrybox'>
        <input type='text' onChange={handleChange} placeholder='Enter Town' />
        <input type='submit' onClick={submitHandler} />
      </div>
      <div className='titles'>
        {/* target="_blank" */}
        {/* rel = "noopener noreferrer" */}
        <a
          className='timetable'
          href={`https://tiger.worldline.global/${tiploc}/staff`}>
          VIEW LIVE STATION TIMETABLE
        </a>
      </div>
    </div>
  );
};

export default Convertor;
