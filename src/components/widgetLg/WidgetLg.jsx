import "./widgetLg.css";
import firebase from './../../config/firebase';
import { useState, useEffect } from "react";
import { Link ,Outlet} from 'react-router-dom';
import { Visibility } from "@material-ui/icons";

export default function WidgetLg() {
  const db = firebase.firestore();

  const [preDet, setPrevious] = useState([])
  const [data,setData]=useState([])
  var dbCollection = db.collection("guns").orderBy("time", "desc")
  const prevItem=[]
  var d1 = new Date();
  var date=d1.getTime()
  
 
/*
  useEffect(()=>{
   
    

   
    dbCollection.onSnapshot(snapshopt=>(

      

      
      setPrevious(snapshopt.docs.map(doc=>doc.data()))
    ))
    


},[])
*/

/*

  useEffect(() => {
    dbCollection.onSnapshot(snapshopt => {
      // console.log(snapshopt.docs.map(doc => doc.data().time))
      setPrevious(snapshopt.docs.map((doc => {
        let detDate = doc.data().time.toDate().toDateString()
        let date=new Date()
        let newDate=date.toDateString()
        //let detStatus=doc.data().Status
        
        //const response = isNotToday(detDate,detStatus)
        
        //console.log(response)
        if (newDate!==detDate){
          console.log(doc.data())

        }
      })))

      // let date = new Date()
      // console.log(date.getTime())
     

    })
    


  }, [])
  */

  useEffect(()=>{

  },[preDet])

  useEffect(() => {
    
    
    
    dbCollection.limitToLast(6).onSnapshot(snapshopt => {
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
  


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Previous Detection</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Object</th>
          <th className="widgetLgTh">Date</th>
          
          <th className="widgetLgTh">Status</th>
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

          </tr>
        ))}
        <td className="widgetLgStatus">
        <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              <Link to='/history'  className="widgetSmButton">
                See All
              </Link>
              
            </button>
          </td>
          
      </table>
    </div>
  );
}
