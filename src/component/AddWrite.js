import { useState } from "react"


function Write({formData,formPublish,setFormData}){
    return(
        <>
        <ul>
                <li>
                    <label htmlFor="userName">집사명</label>
                    <input type="text" 
                           id="userName"
                           onChange={(e)=>{
                            setFormData({...formData,ownerName:e.target.value})
                           }}/>
                </li>
                <li>
                    <label htmlFor="userChildren">애기명</label>
                    <input type="text" 
                           id="userChildren"
                           onChange={(e)=>{
                            setFormData({...formData,petName:e.target.value})
                           }}/>
                </li>
                <li>
                    <label htmlFor="userDate">예약일</label>
                    <input type="date" 
                           id="userDate"
                           onChange={(e)=>{
                            setFormData({...formData,aptDate:e.target.value})
                           }}/>
                </li>
                <li>
                    <label htmlFor="userTime">예약시간</label>
                    <input type="time" 
                           id="userTime"
                           onChange={(e)=>{
                            setFormData({...formData,aptTime:e.target.value})
                           }}/>
                </li>
                <li>
                    <label htmlFor="userData">기타설명</label>
                    <textarea id="userData"
                              onChange={(e)=>{
                                setFormData({...formData,aptNotes:e.target.value})
                               }}> 
                    </textarea>
                </li>
            </ul>
            <p>
                <button type="submit"
                        onClick={formPublish}>
                    예약하기
                </button>
            </p>
        </>
    )
}




export default function AddWrite({onSendData,lastId}){
    const resetData ={
        petName: '',
        ownerName: '',
        aptNotes: '',
        aptDate: '',
        aptTime:''
    }
    // useState
    const [formData,setFormData] =useState({resetData});

    // 보내는 함수
    function formPublish(){
        // 객체데이터 완성필요
        const allData = {
            id:lastId + 1,
            petName:formData.petName,
            ownerName:formData.ownerName,
            aptNotes:formData.aptNotes,
            aptDate:formData.aptDate + '' + formData.aptTime
        }
        // 데이터보내기
        onSendData(allData);
        // 데이터 reset
        setFormData(resetData);
    }

    return(
        <div id="write">
            <h2>예약하기</h2>
            <Write formData={formData}
                   formPublish={formPublish}
                   setFormData={setFormData}/>
        </div>
    )
}