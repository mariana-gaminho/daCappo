import React from 'react';
import { Link } from 'react-router-dom';
import BasicButton from '../BasicButton';

import './WalkthroughStep.scss';

type Props = {
  step: number,
  title: string,
  subtitle: string,
  image: string
};

const WalkthroughStep = ({ step, title, subtitle, image}: Props) => {
  return (
    <div className="walkthrough-step">
      <img src={image} alt="walkthrough-image"/>
      <div className="text">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around step-dots">
          <div className={`dot ${(step === 1 || step === 2 || step === 3) && "fill"}`}></div>
          <div className={`dot ${(step === 2 || step === 3) && "fill"}`}></div>
          <div className={`dot ${(step === 3) && "fill"}`}></div>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ backgroundColor:"#ffff" }}>
        <Link to="/catalogue" style={{ width: "80%" }}>
          <BasicButton
            text="GOT IT!"
            onClick={() => false}
            style={{
              paddingLeft: "28%",
              paddingRight: "28%",
              paddingTop: "3%",
              paddingBottom: "3%",
              width: "100%",
              marginTop: "15%",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default WalkthroughStep;
