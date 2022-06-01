import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef } from 'react'
import ListItem from '../listItem/ListItem'
import "./list.scss"

export default function List() {

    const listRef = useRef()

    const handleClick = (direction) =>{
        if(direction === "left"){
        }
    }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}/>
            <div className="container">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
