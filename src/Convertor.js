// import stations from './stations.json';
// import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tipcoding } from './SearchSlice';
import firebase from './firebase';
import './App.css';
import logo from './images/train5.png';
import 'firebase/firestore';

const db = firebase.firestore();
// let stationsview = stations;
let ipgeo = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_GEO_KEY}`;

const Convertor = () => {
  // const [isLoaded, setIsLoaded] = useState('false');

  //town is longname to firestore to match
  //tiploc is firestore return for live timetable
  //input1 is submitted entry

  const [town, setTown] = useState('');
  const [input1, setInput1] = useState('Chertsey');
  const [tiploc, settiploc] = useState('CHTSEY');

  useEffect(() => {
    fetch(ipgeo)
      .then((response) => response.json())
      .then((data3) => {
        setTown(data3.city.toLowerCase());
        dispatch(tipcoding(data3.city));
      });
  }, []);

  useEffect(() => {
    db.collection('stations')
      .where('stationName', '==', town)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          settiploc(doc.data().TiplocCode);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, [town]);

  const handleChange = (e) => {
    setInput1(e.target.value.toLowerCase());
  };
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(tipcoding(input1));
    setTown(input1);
  };

  return (
    <div className='stationentry'>
      <img className='trainimage' src={logo} alt='logo'></img>
      <div className='entrybox'>
        <input type='text' onChange={handleChange} placeholder='Enter Town' />
        <input type='submit' onClick={submitHandler} />
      </div>
      <div className='titles'>
        <a
          className='timetable'
          href={`https://tiger.worldline.global/${tiploc}/staff`}>
          VIEW LIVE STATION TIMETABLE
        </a>
      </div>
    </div>
  );

  //
  // UPLOADER OF stations in UK json uploader to Firebase
  // useEffect(() => {
  //     stationsview.forEach(function (obj) {
  //       db.collection('stations')
  //         .doc(obj.StationName.toLowerCase())
  //         .set({
  //           id: obj.StationName,
  //           stationName: obj.StationName.toLowerCase(),
  //           TiplocCode: obj.TiplocCode,
  //           CrsCode: obj.CrsCode,
  //         })
  //         .then(function (docRef) {
  //           console.log('doc written' + docRef.id);
  //         })
  //         .catch(function (error) {
  //           console.log('error: ' + error);
  //         });
  //     });
  //   }, [stations]);
};

export default Convertor;
