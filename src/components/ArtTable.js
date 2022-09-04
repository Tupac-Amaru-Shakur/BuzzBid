import React from 'react';
import { MDBDataTable } from 'mdbreact';

const pagedetect = (props) => {
  const data = {
    columns: props.columns,
    rows: props.rows   
  };


  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}

    />
  );
}

export default pagedetect;
