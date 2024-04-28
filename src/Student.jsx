import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ?"Yes":"No"}</p>
        </div>
    );
}

Student.protoType={
    name:propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool,
}
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}
export default Student