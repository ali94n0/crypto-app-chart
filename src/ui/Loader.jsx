import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({height=70,width=70}) => {
    return (
        <RotatingLines
  visible={true}
  height={height}
  width={width}
  strokeColor="royalblue"
  strokeWidth="2"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  

  />
    );
};

export default Loader;