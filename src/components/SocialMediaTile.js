import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';

function SocialMediaTile (props) {
    return (
        <div>
            <h1>Social Media</h1>
            <div><BiGlobe/> {props.Website} </div>
            <div><AiFillGithub /> {props.Github}</div>  
            <div><AiFillInstagram /> {props.Instagram}</div>  
        </div>
    );
}

export default SocialMediaTile;
