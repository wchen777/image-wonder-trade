import React, { useState } from 'react';
import NameEntry from './NameEntry';
import UploadForm from './UploadForm';
import ImageDisplay from './ImageDisplay';
import Modal from './Modal';

const Home = () => {
  const[nameSubmitted, setNameSubmit] = useState(false);
  const[hasUploaded, setUploaded] = useState(false);
  const[name, setName] = useState("Anonymous");
  const [selectedImg, setSelectedImg] = useState(null);

  const onSubmit = (note) => {
    if (note === ""){
        setName("Anonymous");
    } else {
        setName(note);
    }
    setNameSubmit(true);
}

const revert = () => {
  setNameSubmit(false);
}

const allowTrade = (val) => {
  setUploaded(val);
}

  return (
    <div className="title">
      {!nameSubmitted && <NameEntry onSubmit = {onSubmit}/>} 
      {!hasUploaded && nameSubmitted && <UploadForm name = {name} revert = {revert} allowTrade = {allowTrade}/>}
      {nameSubmitted && hasUploaded && <ImageDisplay allowTrade = {allowTrade} revert = {revert} setSelectedImg = {setSelectedImg}/>}
      {/* Modal refreshes trade screen */ }
      {/* { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
    </div>
  )
}

export default Home;