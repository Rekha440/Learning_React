import profilePic from './assets/family.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title" >Rekha first React </h2>
            <p className="card-text">I am learning react from youtube and implementing it<code></code></p>
        </div>
    );

}

export default Card