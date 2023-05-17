import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionTypes'
import * as actionsCreators from '../../actions/actionCreators';
import {CreateUser,GetUser, UpdateUser, DeleteUser} from '../../Slices/userSlicer';


function UserList(props) {
  const {users, error, isLoading, currentUser,
    getAction, createAction, updateAction, deleteAction} = props;
      const mapUsers = (u, i) => {
      const updateHandler = () => {updateAction({id: u.id, isSelected:!u.isSelected})}
      const deleteHandler = () => {deleteAction(u.id)}
          return(
          <li key={u.id}>
          User #{u.id}: {u.name} {u.surname} 
          <input type="checkbox" onChange={updateHandler} checked={u.isSelected}/> 
          <button onClick={deleteHandler}>delete</button>
        </li>
      )
    }
      return(
      <>
      User lists:
      <ul>
        {props.state.users.map(mapUsers)}
      </ul>
  </>

        
    )
  }
 
  

const mapActions = (dispatch) => {
  return{
      // getAction: (id) => dispatch(actionsCreators.getUser(id)),
      // createAction: (data) => dispatch(actionsCreators.createUser(data)),
      // updateAction: (data) => dispatch(actionsCreators.updateUser(data)),
      // deleteAction: (id) => dispatch(actionsCreators.deleteUser(id)),
      getAction: (id) => dispatch(GetUser(id)),
      createAction: (data) => dispatch(CreateUser(data)),
      updateAction: (data) => dispatch(UpdateUser(data)),
      deleteAction: (id) => dispatch(DeleteUser(id)),
  }
}

const mapStates = (state) => {
  return {state: state.userReducer}
}



export default connect(mapStates, mapActions)(UserList);