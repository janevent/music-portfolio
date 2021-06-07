import React, {useState, useEffect} from 'react';
import '../styles/Profile.css';
import Credit from './Credit/Credit.js';


const Profile = (props) => {
    

    const [profile, setProfile] = useState(props.profile);
   // const [autobio, setAutobio] = useState(props.profile)

    useEffect(() => {
        console.log("I have been mounted");
        document.getElementsByClassName("App")[0].style.backgroundSize = "cover";
       
        return function cleanUp(){
            document.getElementsByClassName("App")[0].style.backgroundSize = "contain";    
        }
    });
   
        return(
            <div className="Profile">
                <div className="profile-container">
                    <h1>About {profile.name}</h1>
                    <div className="paragraphs">{profile.autobio}</div>
                </div>
                <Credit/>
            </div>
        )
}

export default Profile;

