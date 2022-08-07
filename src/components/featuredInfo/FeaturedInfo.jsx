import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import firebase from './../../config/firebase';
import { useState, useEffect } from "react";
import { Link ,Outlet} from 'react-router-dom';


export default function FeaturedInfo() {
  const db = firebase.firestore();

  const [det, setDets] = useState([])
  const [data, setData] = useState([])
  const [totalDet,setDet]=useState([])
  //let date=new Date()

  
  //const [dateTime, setdateTime] = useState([])
  //const [data,setData]=useState([])
  var dbCollection = db.collection("guns").orderBy("time", "desc")
  //var newCollection=db.collection("history")
  //var gunCollection=db.collection("Detection")
  //var prevCollection=db.collection("Previous")
  //console.log("Previous data",Object.keys(data).length)
  
 
  //console.log("New Detection",Object.keys(data).length)
  
  useEffect(() => {
    const newItem=[]
    
   
    
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
        
        if(detDate===newDate){


          
          newItem.push({
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
      setDets(newItem)
      
      

    })
    
    


  }, [])
  useEffect(() => {
    const prevItem=[]
    
   
    
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
        
        if(detDate!==newDate){


          
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
      setData(prevItem)
      
      

    })
    
    


  }, [])

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
      setDet(snapshopt.docs.map(doc=>doc.data()))

    })
    


  }, [])
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Detection</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{Object.keys(totalDet).length}</span>
          
        </div>
        <span className="featuredSub">Over All Detection</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Detection</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{Object.keys(det).length}</span>
          
        </div>
        <span className="featuredSub">Today</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Previous Detections</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{Object.keys(data).length}</span>
          
        </div>
        <span className="featuredSub">All Previous Detection</span>
      </div>
    </div>
  );
}
