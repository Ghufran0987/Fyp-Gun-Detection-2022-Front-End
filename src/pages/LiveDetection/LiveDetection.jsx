import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./productList.css"

export default function LiveDetection() {
  

  return (
    <div className="productList">
      <h3>Live Detection</h3>
      <img src="http://localhost:5000/video_feed"></img>
    </div>
  );
}

