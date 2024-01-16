import React, { useEffect, useMemo } from 'react'
import Openings from '../util/JobOpenings.json'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/Position.css'

export default function AvailablePosition() {
    const Position = useParams().position; // Getting the position from the URL parameters
    const Navigate = useNavigate(); // Getting the navigation function from react-router-dom
    const PositionInfo = useMemo(() => {
        for (let i in Openings) {
            console.log(Openings[i].title.toLowerCase().trim(), Position);
            if (Openings[i].title.toLowerCase().trim() === Position) {
                return Openings[i]; // Returning the position information if a match is found
            }
        }
        return null; // Returning null if no match is found
    }, [Position]);

    useEffect(() => {
        if (!PositionInfo) {
            Navigate('/'); // Navigating to the homepage if the position information is not found
            return;
        }
    }, [Position]);

    if (!PositionInfo) {
        return null; // Returning null if the position information is not found
    }

    const Click = () => {
        Navigate(`/application/${PositionInfo.title.toLowerCase().trim()}`); // Navigating to the application page for the selected position
    }

    return (
        <div className='job-position'>
            <h1 className="job-position-heading">{PositionInfo.title}</h1> {/* Displaying the position title */}
            <h2 className="job-position-subheading">{PositionInfo.category}</h2> {/* Displaying the position category */}
            <p className="job-position-subheading ptag">{PositionInfo.description}</p> {/* Displaying the position description */}

            <div className='job-BottomArea'>
                <h1>Pay & Sick Time</h1>
                <ul>
                    <li>{PositionInfo.wage}</li> {/* Displaying the position wage */}
                    <li>{PositionInfo.hours}</li> {/* Displaying the position hours */}
                    <li>{PositionInfo.sick_time}</li> {/* Displaying the position sick time */}
                </ul>
                <h1>Work Life</h1>
                <ul>
                    <li>{PositionInfo.work_environment}</li> {/* Displaying the position work environment */}
                    <li>{PositionInfo.work_experience}</li> {/* Displaying the position work experience */}
                    <li>{PositionInfo.job_requirements}</li> {/* Displaying the position job requirements */}
                </ul>
                <h1>Expectations</h1>
                <p>{PositionInfo.expectations}</p> {/* Displaying the position expectations */}
                <button className='ApplyHere' onClick={Click}>Apply Today</button> {/* Button to apply for the position */}
            </div>
        </div>
    )
}