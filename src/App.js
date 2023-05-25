import AddInfo from "./component/AddInfo";
import AddWrite from "./component/AddWrite";
import './App.css';
import { useCallback, useEffect, useState } from "react";


function App() {
  // state
  const [dataBy,setDataBy] = useState([]);

  // useCallBack
  const Data = useCallback(()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>setDataBy(data))
  },[]);
  
  // useEffect
  useEffect(Data,[Data]);

  return (
    <div id="box">
      <AddWrite onSendData={(myData)=>setDataBy([...dataBy,myData])}
                lastId={dataBy.reduce((max,item)=>Number(item.id) > max ? Number(item.id) : max,0)}/>
    <div id="list">
     <ul>
      {dataBy.map((item)=>(<AddInfo key={item.id}
                                    info={item}
                                    onDelete={(myId)=>setDataBy(
                                      dataBy.filter(
                                        (item)=>{return item.id !== myId}))}/>))}
     </ul>
    </div>
    </div>
  );
}

export default App;
