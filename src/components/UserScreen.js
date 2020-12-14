import React, { useState, useEffect } from 'react';
import UserComp from './UserComp';
import PropTypes from 'prop-types';

/**
  * @desc function UserScreen - 
  * Fetches users with selected id (with useEffect) as parameter and sets it to state.
  * Sends fetched data as props to UserComp.
*/
export default function UserScreen(props) {

    const [data, setData ] = useState("")

    const {match: {params}} = props;

/**
  * @desc useEffect - 
  * Fetches the clicked user from UserListComponent by id. 
  * Every time ${params.id} changes, useEffect runs.
  * sets the state data to result.
*/
    useEffect(() => {
        fetch(`https://api.softhouse.rocks/users/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setData(data);
        }) 
    }, 
    [params.id]
    );

    return(
        <div>
            <UserComp dataToUserComp={data}></UserComp>
        </div>
    )
}

UserScreen.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
};


