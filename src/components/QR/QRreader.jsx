import React from "react";
import QrReader from "react-qr-reader";

import stl from './QRreader.module.css'

export const QRreader = ({ handleScan, handleError }) => {
  return (
    <div className= {stl.QRreader}>
      <QrReader
        delay={100}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "40%", margin: "5% auto" }}
      />
      <h3>Please scan your QR code</h3>
    </div>
  );
};
