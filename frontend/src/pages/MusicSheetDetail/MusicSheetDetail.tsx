import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';

import goBack from '../../assets/icons/go-back-icon.png';
import './MusicSheetDetail.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const MusicSheetDetail = (props:any) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleResize = (e: any) => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); 
  }, [windowWidth]);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: any) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function changeBackgroundColor(color: string) {
    setBackgroundColor(color);
  }

  return (
    <div className="music-sheet-detail">
      <div className="menu d-flex justify-content-between align-items-center">
        <Link
          to={props.location.state.prevPath || "/catalogue"}
          className="go-back"
        >
          <img src={goBack} alt="go-back" className="go-back-icon"/>
        </Link>
        <div className="colors d-flex justify-content-around">
          <button onClick={() => changeBackgroundColor("white")}>
            <div className="color white"></div>
          </button>
          <button onClick={() => changeBackgroundColor("sepia")}>
            <div className="color sepia"></div>
          </button>
          <button onClick={() => changeBackgroundColor("gray")}>
            <div className="color gray"></div>
          </button>
        </div>
      </div>
      <div className={`filter ${backgroundColor}`}></div>
      <div className="d-flex align-items-center" style={{ height: "80vh" }}>
        <Document
            file={props.location.state.musicSheet.file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="document"
        >
          <Page pageNumber={pageNumber} width={windowWidth}/>
        </Document>
      </div>
      <div className="pagination d-flex flex-wrap justify-content-center">
        <p className="text">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          // @ts-ignore
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MusicSheetDetail;