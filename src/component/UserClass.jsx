


import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        avatar_url: "",
        public_repos: 0,
      },
      count: 0, 
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/HarshRaj3382"); 
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, avatar_url, public_repos, location } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        <h2>Name: {name}</h2>
        <h3>Location: {location || "Jagdishpur, Aurangabad (Bihar)"}</h3>
        <h3>Contact: @Harsh3382</h3>
        <h3>Public Repos: {public_repos}</h3>
        <button
          className="Like-btn"
          onClick={() =>
            this.setState((prevState) => ({
                 count: prevState.count + 1
             }))
          }
        >
          Upvote: {count}
        </button>
      </div>
    );
  }
}

export default UserClass;
