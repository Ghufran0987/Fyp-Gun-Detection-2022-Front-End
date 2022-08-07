import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "../../components/widgetLg/widgetLg.css";
import firebase from "../../config/firebase";
import { Visibility } from "@material-ui/icons";

export default function History() {
  const [data, setData] = useState();
  const [preDet, setPrevious] = useState([])
  const prevItem=[]

  const db = firebase.firestore();
  var dbCollection = db.collection("guns").orderBy("time", "desc")


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(()=>{

  },[preDet])

  useEffect(() => {
    
    
    
    dbCollection.onSnapshot(snapshopt => {
      //console.log("Total Detection",snapshopt.size)
      
      // console.log(snapshopt.docs.map(doc => doc.data().time))
      snapshopt.docs.map((doc => {
        
        let detDate = doc.data().time.toDate().toDateString()
        let detStatus=doc.data().Status
        let date=new Date()
        let newDate=date.toDateString()
        //console.log(doc.data().Status)

        

        //console.log(doc.data())
        
        if(detDate !== newDate){

          
          
          prevItem.push({
            ...doc.data(),
            key:doc.id
          })
          
        }
        
        
        
        
        
        
        //const response = isNotToday(detDate,detStatus)
        //console.log(doc.id)
        //console.log(response)
      }))

      // let date = new Date()
      // console.log(date.getTime())
      setPrevious(prevItem)
      

    })
    
    


  }, [preDet])

  useEffect(()=>{

  },[preDet])
  
  

  return (
    <div className="userList">
       <h3 className="widgetLgTitle">Previous Detection</h3>
       <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Object</th>
          <th className="widgetLgTh">Date</th>
          
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        {preDet.map((dets)=>(
          <tr>
            <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mRpgqynhB3h5J2zocSvXgs9mDfUFVRyasgkH0H2CvEZ707m32NizgVAFtQ2iZATt6hE&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{dets.Status}</span>
          </td>
          <td className="widgetLgDate">{new Date(dets.time.seconds * 1000 + dets.time.nanoseconds / 1000000).toDateString()}</td>
          
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgStatus">
        <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              <Link to={`/${dets.id}`}  className="widgetSmButton">
                See All
              </Link>
              
            </button>
          </td>
          

          </tr>
        ))}
        </table>

    </div>
    
  );
}
