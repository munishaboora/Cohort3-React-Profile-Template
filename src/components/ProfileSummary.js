import React from 'react'
import './ProfileSummary.css'
import SocialMediaTile from './SocialMediaTile';
import ImageTile from './ImageTile';
import munisha from './Munisha.jpg';

const details = {
    FullName: "Munisha Boora",
    Job: "Software Engineer",
    Location: "London, England, United Kingdom",
    Website: "www.munisha.com",
    Github: "munishab",
    Instagram: "@munishab",
    BackgroundImage: "https://wallpaperaccess.com/full/1672438.jpg"
}

function ProfileSummary () {
    return (
        <div >
            <div className="section">
              <h1>Profile Summary</h1>
                <img className="profile-pic" src={munisha} />
                <p className="information-summary">Full Name: <br/> {details.FullName}</p>
                <p className="information-summary">Job Title: <br/> {details.Job}</p>
                <p className="information-summary">Location: <br/> {details.Location}</p>  
            </div>
            
            <div className="section"> 
                <SocialMediaTile Github={details.Github} Instagram={details.Instagram} Website={details.Website} /> 
            </div>

            <ImageTile image={details.BackgroundImage}/> 
                        
        </div>
    );
}

export default ProfileSummary;