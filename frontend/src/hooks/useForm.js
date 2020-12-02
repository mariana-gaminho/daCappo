import { useState } from 'react';
import axios from 'axios';

const useForm = () => {
  const [form, setForm] = useState({});
  // const isProduction = process.env.NODE_ENV === 'production';
  // const baseURL = isProduction
  //   ? 'https://dacappo.herokuapp.com'
  //   : 'http://localhost:3000';
  const baseURL = 'https://dacappo.herokuapp.com';

  function handleInputs(e) {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function uploadPDF(e) {
    const file = new FormData();
    let secureUrl;

    file.append('pdf', e.target.files[0]);
    const {
      data: { image },
    } = await axios.post(`${baseURL}/upload`, file);

    secureUrl = image.split('http').join('https');

    setForm((prevState) => ({
      ...prevState,
      file: secureUrl,
    }));
  }

  return [form, handleInputs, uploadPDF];
};

export default useForm;
