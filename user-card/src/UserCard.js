import React from "react";

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

class UserCard extends React.Component {

    render() {
        return (
            <div className='userCard'>
                <h2>{this.props.users.name}</h2>
                <img style={{width: "200px"}} src={this.props.users.avatar_url} alt={this.props.users.id} />
                <p>Location: {this.props.users.location}</p>
                <div>
                    <h4>Followers:</h4>
                    {
                        this.props.followers.map(follower => 
                            <p key={follower.id}><EmojiPeopleIcon />{follower.login}</p>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default UserCard;