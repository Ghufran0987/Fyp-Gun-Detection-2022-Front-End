import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import firebase from './../../config/firebase';
import { useState, useEffect } from "react";
import { Link ,Outlet} from 'react-router-dom';

export default function Chart() {
  const db = firebase.firestore();

  const [det, setDets] = useState([])
  //let date=new Date()
  

  


  //console.log(det.time)
  
  //const [dateTime, setdateTime] = useState([])
  //const [data,setData]=useState([])
  var dbCollection = db.collection("guns").orderBy("time", "desc")

  useEffect(() => {
    dbCollection.onSnapshot(snapshopt => {
      // console.log(snapshopt.docs.map(doc => doc.data().time))
      snapshopt.docs.map((doc => {
        let detDate = doc.data().time.toDate().toDateString()
        let detStatus=doc.data().Status
        
        //const response = isNotToday(detDate,detStatus)
        //console.log(doc.id)
        //console.log(response)
      }))

      // let date = new Date()
      // console.log(date.getTime())
      setDets(snapshopt.docs.map(doc=>doc.data()))

    })
    


  }, [])


  return (
    <div className="chart">
      <h3 className="chartTitle">Graph</h3>
      
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={det}>
          <XAxis  stroke="#5550bd" />
          <Line type="monotone"  stroke="#5550bd" />
          <Tooltip />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
