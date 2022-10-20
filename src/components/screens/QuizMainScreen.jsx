import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { increment } from '../context/actions'

const QuizMainScreen = () => {
    const quistion = useSelector(state=>state.quistion)
    const point = useSelector(state => state.point)
    const dispatch = useDispatch()
    const [num,setNum]=useState(0)
    const [wrong,setWrong]=useState("")
    const [correct,setCorrect]=useState("")
    const current = quistion[num]
    console.log(quistion);
    const handleAnswer = (item) =>{
        if (item == current.correct) {
            dispatch(increment())
            setCorrect(item)
            setTimeout(() => {
                setCorrect("")
                setNum(num + 1)
            }, 1000);
        }else{
            setWrong(item)
            setTimeout(() => {
                setNum(num + 1)
                setWrong("")

            }, 1000);
        }
    }
  return (
    <Cover>
        <Top>
            <Qtimer>30s</Qtimer>
            <Header>POINT : {point}</Header>
            <Ttimer>3min30s</Ttimer>
        </Top>
        <Center>
            {current.quistion}
        </Center>
        <Option>
            {
              current.answers.map((item)=>(
                <Box onClick={()=>handleAnswer(item)} className={wrong == item ? 'active' : correct == item ? 'correct' : ''}>{item}</Box>
              ))  
            }
        </Option>
    </Cover>
  )
}

export default QuizMainScreen
const Cover = styled.div`
    width:100%;
    height:100vh;
    background:#141414;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
`;
const Top = styled.div`
    width:100%;
    height:50px;
    background:#141ff1;
    // padding:0px 10px;
    display:flex;
    align-items:center;
    // margin:0px 10px;
    justify-content:space-between;
`;
const Qtimer = styled.div`
    margin-left:10px;
`;
const Header = styled.div`
    font-size:22px;
    color:#fff;
    font-weight:700;
`;
const Ttimer = styled.div`
    margin-right:10px;
`;
const Center = styled.div`
    width:100%;
    text-align:center;
    padding:20px;
    color:red;
    font-weight:25px;
    font-size:34px;
    background:#171717;
    
`;
const Option = styled.div`
    display:flex;

`;
const Box = styled.div`
    width:25%;
    height:200px;
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:.4s ease;
    cursor:pointer;
    &:hover{
        transform:scale(1.2);
        transition:.4s ease;
    }
    &.active{
        background:red;
    }
    &.correct{
        background:green;
    }
`;