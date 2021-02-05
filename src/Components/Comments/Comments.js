import React, { useState, Component } from 'react';
import { Modal, Button } from 'antd';

import  Comment from './Comment/Comment'

import axios from 'axios';


class Comments extends Component {

  state = {
    comments: [],
    error: false,
    newComment: '',
    isModalVisible: false
  }

  showModal = () => {
    this.setState({isModalVisible:true})
  };

  handleOk = () => {
    this.setState({isModalVisible: false})
    this.handleNew()
  };

  handleCancel = () => {
    this.setState({isModalVisible: false})
  };

  //todo: 如何确认登陆状态
  handleNew = () => {
    const data = {
      newComment: this.state.newComment
    };
    axios.post('/mainpage', data)
      .then(response => {
        console.log(response);
      })
  }

  

  render (){
    let comments = <p style={{textAlign: 'center'}}>No comments for this item :(</p>;
      if (!this.state.error) {
        comments = this.state.comments.map(comment => {
          return <Comment 
                    username={comment.username}
                    time={comment.time}
                    context={comment.context}
            />
    
        })
      }
    
      return (
        <>
          <button onClick={this.showModal}>Comments</button>
          <Modal title="Comments and Reviews" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <div>
                {comments}
            </div>
            <div>
                <h3>Add your comments!</h3>
                <input type="text" value={this.state.newComment} onChange={(event) => this.setState({newComment: event.target.value})}/>
    
            </div>
          </Modal>
        </>
      );
  }
  
  
};

export default Comments;