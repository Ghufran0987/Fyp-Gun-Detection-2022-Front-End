import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import firebase from './../../config/firebase';
import { useState, useEffect } from "react";
import { Link ,Outlet} from 'react-router-dom';


export default function WidgetSm() {

  const db = firebase.firestore();

  const [det, setDets] = useState([])
  const [newDet,setNew]=useState([])
  const [loader,setLoader]=useState(true)
  //let date=new Date()

  
  //const [dateTime, setdateTime] = useState([])
  //const [data,setData]=useState([])
  var dbCollection = db.collection("guns").orderBy("time", "desc")
  //var newCollection=db.collection("history")
  //var gunCollection=db.collection("Detection")
  //var prevCollection=db.collection("Previous")
 
  //console.log("New Detection",Object.keys(det).length)
  
  const newItem=[]


  function getData(){

    dbCollection.onSnapshot((querySnapshot)=>{

      const items=[]
      querySnapshot.docs.map((doc)=>{
        let detDate = doc.data().time.toDate().toDateString()
        let date=new Date()
        let newDate=date.toDateString()

        if(detDate===newDate){
          items.push(doc.data())

        }
        

        
      })
      setNew(items)
      setLoader(false)
    })
  }

  useEffect(()=>{

    getData()
  },[])
  /*
  useEffect(()=>{

  },[newDet])
*/
  
  


  /*
  
  const isNotToday = (date,status,id) => {
    // var date = document.getElementById("inputDate").value;
    let detDate = new Date(date); //dd-mm-YYYY
    detDate.setHours(0)
    var today = new Date();
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    
    // console.log(detDate.getTime(), today.getTime())
    if (detDate.getTime() === today.getTime()) {


      
      gunCollection.doc().set({
        Status:status,
        time:date,
        id:id
      })
    }

    // if (detDate < today) {
    //   // console.log(detDate, today)
    //   return true
    // }

    else{
      prevCollection.doc().set({
        Status:status,
        time:date,
        id:id
      })

    }
  }
  */
  
  
  //chl rha hai
  useEffect(() => {
    
    
    dbCollection.onSnapshot(snapshopt => {
      console.log("Total Detection",snapshopt.size)
      
      // console.log(snapshopt.docs.map(doc => doc.data().time))
      snapshopt.docs.map((doc => {
        
        let detDate = doc.data().time.toDate().toDateString()
        let detStatus=doc.data().Status
        let date=new Date()
        let newDate=date.toDateString()
        //console.log(doc.data().Status)
        //console.log("Current Nikalnay Wala",newDate)
        //console.log("Database wala",detDate)

        
        
        //console.log(doc.data())
        
        if(detDate==newDate){

          newItem.push({
            ...doc.data(),
            key:doc.id
          })


          /*
          newItem.push({
            ...doc.data(),
            key:doc.id
          })
          */
          
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
  

/*
  useEffect(()=>{
   

    dbCollection.onSnapshot(response=>{


      const mov=response.docs.map(doc=>({
        

        

        data:doc.data(),
        id:doc.id
      }))

      setNew(mov)
    })


    

  },[])
  
useEffect(()=>{

},[newDet])
  
/*
  useEffect(()=>{
    

    let date=new Date()

    
    dbCollection.where("time", "==", date).onSnapshot(function(snapshopt){
      snapshopt.docs.map(function(doc){
        let id=doc.data().id
       let detDate = doc.data().time.toDate().toDateString()
       let status=doc.data().Status
        //let id=doc.id
        

        console.log(doc.data())
        

        
        
        
        
        
        
        

      })
      
    })
   
    //isToday(detDate,status,id)
    
  },[])
  */
  /*
  useEffect(() => {
    const item=[]

    dbCollection.get().then(function(querySnapshot) {
    
    querySnapshot.forEach(function(doc) {
    
    //console.log(doc.id, " => ", doc.data());
    item.push({
        ...doc.data(),
        key:doc.id
    })

    
    
    
    });
    setData(item)
    
    });
    
    }, []);
    */

    
    
    

    
    

    

    

  
  return (


    <div className="widgetSm">
      <span className="widgetSmTitle">Today's Detection</span>
      {newDet.map((dets) => (
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://intellisee.com/wp-content/uploads/2020/04/WEAPON-icon.png"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Detected</span>
              
              <span className="widgetSmUserTitle">{new Date(dets.time.seconds * 1000 + dets.time.nanoseconds / 1000000).toDateString()}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              <Link to={`/${dets.id}`}  className="widgetSmButton">
                Display
              </Link>
              
            </button>
          </li>
        </ul>


      ))}
      

    </div>
  );
}