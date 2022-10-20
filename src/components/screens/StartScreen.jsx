import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StartScreen = () => {
const [seconds, setSeconds] = useState(3);
const [startedTime,setStartedTime] = useState(false)
const navigate = useNavigate()
useEffect(()=>{
    if(startedTime ==true){
        if (seconds > 0 ){
            setInterval(() => {
                setSeconds((prev)=> prev - 1)
            }, 1500);
        }else{
            setStartedTime(false)
            setSeconds(3)
            navigate("/start")
        }
    }
},[seconds,startedTime])
  return (
    <Cover>
        <Center>
            <StartContainer onClick={()=>setStartedTime(!startedTime)}>{startedTime ? seconds : 'START'}</StartContainer>
        </Center>
    </Cover>
  )
}

export default StartScreen
const Cover = styled.div`
    width:100%;
    height:100vh;
    background:#141414;
    display:flex;
    align-items:center;
`;
const Center = styled.div`
    width:100%;
    padding:20px 0px;
    display:flex;
    justify-content:center;
    background:#161616;
`;
const StartContainer = styled.div`
    color:red;
    font-size:50px;
    cursor:pointer;
`;