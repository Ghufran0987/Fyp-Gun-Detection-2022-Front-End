import { Link } from "react-router-dom";
import "./user.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import firebase from '../../config/firebase';
import { useState } from "react";
import { Card } from "semantic-ui-react";
export default function HistoryDetails() {
  let params = useParams();
  const db=firebase.firestore();
  const [detimg,setImg]=useState([])
  const [newimg,setNew]=useState([])

  
  useEffect(()=>{
    db.collection('guns').doc(params.historyId).collection('frames').onSnapshot(snapshopt=>(
        setNew(snapshopt.docs.map(doc=>doc.data()))
    ))


},[])



  useEffect(()=>{
    const items=[]
    db.collection('guns').doc(params.historyId).collection('frames').get().then(function(querySnapshot){

        querySnapshot.forEach(function(doc){

            items.push(doc.data())
        })
        setImg(items)



    })



    


},[])
  return (
   <div className="user">
       <Card.Group>
            {newimg.map((det)=>(
                <Card color='red' image={`data:image/png;base64,${det.Image}`} />

                
                ))}



            </Card.Group>
   </div>
  );
}
