import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import useForm from '../../hooks/useForm';
import LineInput from '../../components/LineInput';
import BasicButton from '../../components/BasicButton';

import closeIcon from '../../assets/icons/close.png';
import clipIcon from '../../assets/icons/clip.png';
import './AddMusicSheet.scss';

const AddMusicSheet = (props: any) => {
  const [form, handleInputs, uploadPDF] = useForm();
  const isProduction = process.env.NODE_ENV === "production";
  const baseURL = isProduction ? 'https://dacappo.herokuapp.com' : 'http://localhost:3000';

  useEffect(() => {
    console.log(form);
  }, [form]);

  function addMusicSheet() {
    axios.post(`${baseURL}/api/musicSheet`, form)
    .then(({ data })=>{
      console.log("Music sheet successfully added");
      props.history.push('/catalogue');
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="add-music-sheet">
      <div className="d-flex justify-content-between align-items-center">
        <p className="title">Add music sheet</p>
        <Link to="/catalogue">
          <img src={closeIcon} alt="close" className="close"/>
        </Link>
      </div>
      <div className="d-flex align-items-center" style={{ marginTop: "10px" }}>
        <img src={clipIcon} alt="clip" className="clip" />
        <LineInput
          // @ts-ignore
          onChange={uploadPDF}
          name="file"
          type="file"
          placeholder="Choose file"
          style={{ backgroundColor: "#fafafa" }}
        />
      </div>
      <div className="format">
        <p className="label">Format</p>
        <div className="plain-copy">
          <p>Plain Copy</p>
        </div>
      </div>
      <div className="inputs">
        <LineInput
          label="Title"
          // @ts-ignore
          onChange={handleInputs}
          name="name"
          type="text"
          placeholder="Music sheet's title here"
          style={{ backgroundColor: "#fafafa" }}
        />
        <LineInput
          label="Composer"
          // @ts-ignore
          onChange={handleInputs}
          name="composer"
          type="text"
          placeholder="Composer's name here"
          style={{ backgroundColor: "#fafafa" }}
        /> 
        <LineInput
          label="Editorial"
          // @ts-ignore
          onChange={handleInputs}
          name="editorial"
          type="text"
          placeholder="Editorial's name here"
          style={{ backgroundColor: "#fafafa" }}
        />
        <LineInput
          label="Instrument"
          // @ts-ignore
          onChange={handleInputs}
          name="instruments"
          type="text"
          placeholder="Add instrument"
          style={{ backgroundColor: "#fafafa" }}
        />
      </div>
      <div className="d-flex justify-content-center">
        <BasicButton 
          text="DONE"
          onClick={addMusicSheet}
          style={{
            paddingLeft: "28%",
            paddingRight: "28%",
            paddingTop: "3%",
            paddingBottom: "3%",
            width: "80%",
            marginTop: "15%",
          }}
        />
      </div>
    </div>
  );
};

export default AddMusicSheet;