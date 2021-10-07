import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';

function SocialMediaTile (props) {
    return (
        <div className="section">
            <h1> Social Media Summary </h1>
            <p> <BiGlobe/> {props.Website} </p>
            <p> <AiFillGithub /> {props.Github} </p>  
            <p> <AiFillInstagram /> {props.Instagram} </p>  
        </div>
    );
}

export default SocialMediaTile;
