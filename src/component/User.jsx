import PropTypes from "prop-types";
const User = (props) => {
  
  return (
    <div className="user-card">
        <h2>Name:{props.name}</h2>
        <h3>Location: 
          <br/>
          Jagdishpur,Aurangabad(Bihar)</h3>
        <h3>Contact: @Harsh3382</h3>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired, 
};

export default User;