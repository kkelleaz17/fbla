import React, { useEffect, useMemo } from 'react'
import Openings from '../util/JobOpenings.json'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/Position.css'
export default function AvailablePosition() {
    const Position = useParams().position;
    const Navigate = useNavigate();
    const PositionInfo = useMemo(()=>{
        for(let i in Openings){
            console.log(Openings[i].title.toLowerCase().trim(),Position)
            if(Openings[i].title.toLowerCase().trim() == Position){
                return Openings[i]
            }
        }
        return null
    },[Position])
    useEffect(()=>{
        if(!PositionInfo){
            Navigate('/')
            return;
        }
    },[Position])
    if(!PositionInfo){
        return;
    }
    const Click =()=>{
        Navigate(`/application/${PositionInfo.title.toLowerCase().trim()}`)
    }
  return (
    <div className='job-position'>
        <h1 className="job-position-heading">{PositionInfo.title}</h1>
        <h2 className="job-position-subheading">{PositionInfo.category}</h2>
        <p className="job-position-subheading ptag">{PositionInfo.description}</p>

        <div className='job-BottomArea'>
            <h1>Pay & Sick Time</h1>
            <ul>
                <li>{PositionInfo.wage}</li>
                <li>{PositionInfo.hours}</li>
                <li>{PositionInfo.sick_time}</li>
            </ul>
            <h1>Work Life</h1>
            <ul>
                <li>{PositionInfo.work_environment}</li>
                <li>{PositionInfo.work_experience}</li>
                <li>{PositionInfo.job_requirements}</li>
            </ul>
            <h1>Expectations</h1>
            <p>{PositionInfo.expectations}</p>
            <button className='ApplyHere' onClick={Click}>Apply Today</button>
        </div>
    </div>
  )
}
