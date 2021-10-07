import React from 'react'
import SocialMediaTile from './SocialMediaTile';
import munisha from './Munisha.jpg';

const details = {
    FullName: "Munisha Boora",
    Job: "Software Engineer",
    Location: "London, England, United Kingdom",
    Website: "www.munisha.com",
    Github: "@munishab",
    Instagram: "@munishab"

}

function ProfileSummary () {
    return (
        <div>
            <div >
              <h1>Profile Summary</h1>
              {/* <img alt="profile picture" src={munisha}/> */}
                <p>Full Name: Munisha Boora</p>
                <p>Job Title: Software Engineer</p>
                <p>Location: London, England, United Kingdom</p>  
            </div>

            <div> 
                <SocialMediaTile Github={details.Github} Instagram={details.Instagram} Website={details.Website} />  
            </div>
                 
        </div>
    );
}

export default ProfileSummary;