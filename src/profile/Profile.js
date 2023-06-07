import PropTypes from 'prop-types';

const Profiles= (props) =>{

    const handleName = () => alert (props.fullName)
    return (
        <div style={{textAllign:"center",backgroundColor:"#282c34"}}>
        <img onClick= {() => handleName()} style = {{borderRadius:"17px",margin:"20 0"}}  src={props.imge} width="1000" alt = '' />
        <h1 style={{color: "#61dafb"}}>{props.fullName}</h1>
        <h2 style = {{color: "#61dafb",backgroundColor:"#20232a",padding: "0.8rem"}}>{props.bio} - {props.profession}</h2>
        </div>
    )
}


Profiles.defaultProps={
    fullName:"Adekunle Oluwatobi",
    bio: "My name is Tobi adekunle and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day at Oswald Tech.",
    profession :"Web developer",
}

Profiles.propTypes = { 
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}

export default Profiles