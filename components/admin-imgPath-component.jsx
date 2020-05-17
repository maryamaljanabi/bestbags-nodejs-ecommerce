import React from "react";
import { Label } from "admin-bro";

const imgStyle = {
  width: "30em",
  border: "2px solid gray",
  borderRadius: "11px",
  margin: "1em auto",
};

const AdminShowImage = (props) => {
  const { record, property } = props;
  return (
    <div>
      <Label>Product Image</Label>
      <img style={imgStyle} src={record.params.imagePath} alt="Product Image" />
    </div>
  );
};

export default AdminShowImage;
