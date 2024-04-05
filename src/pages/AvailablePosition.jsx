import React, { useEffect, useMemo,useState } from 'react'
import Openings from '../util/JobOpenings.json'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/Position.css'
import getPositions from '../util/fetchAvailable';

export default function AvailablePosition() {
 // Getting the position from the URL parameters
const Position = useParams().position;

// Getting the navigation function from react-router-dom
const Navigate = useNavigate();

// State variable to store filtered availability
const [AvailablePosition, setavailability] = useState(-1);

// Fetching availability data when component mounts
useEffect(() => {
    const getAvailablity = async () => {
        const data = await getPositions();
        for (let i of data) {
            if (i.Position.toLowerCase() === Position.toLowerCase()) {
                console.log(i.available);
                setavailability(i.available);
            }
        }
    };
    getAvailablity();
}, []);

// Memoized value for the position information based on the selected position
const PositionInfo = useMemo(() => {
    for (let i in Openings) {
        if (Openings[i].title.toLowerCase().trim() === Position) {
            return Openings[i]; // Returning the position information if a match is found
        }
    }
    return null; // Returning null if no match is found
}, [Position]);

// Generating the image source path based on the position title
const srcimg = `/staff/${String(PositionInfo.title).replace(/\s/g, '')}.png`;
console.log(srcimg);

// Redirecting to the homepage if the position information is not found
useEffect(() => {
    if (!PositionInfo) {
        Navigate('/'); // Navigating to the homepage if the position information is not found
        return;
    }
}, [Position]);

// Returning null if the position information is not found
if (!PositionInfo) {
    return null;
}

    // Function to navigate to the application page for the selected position
    const Click = () => {
         Navigate(`/application/${PositionInfo.title.toLowerCase().trim()}`); // Navigating to the application page for the selected position
    };
    /// headertext is the text next to the header
    const headerText = AvailablePosition == -1 ? '( Loading )' : (AvailablePosition != 0)?  ' ( Available )' : ' ( Not Available )'
    return (
        <div className='job-position-container'>
            <div className='job-position'>                 {/* Displaying the position category */}

                <h1 className="job-position-heading">{PositionInfo.title}<b>{headerText}</b></h1> {/* Displaying the position title */}
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
                    <button className='ApplyHere' onClick={Click} disabled={(AvailablePosition == -1) ? false : (AvailablePosition != 0) ? false : true}>Apply Today</button> {/* Button to apply for the position */}
                </div>
            </div>
            <img src={srcimg} />
        </div>
    )
}