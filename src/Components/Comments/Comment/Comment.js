import './Comment.css'

import { Divider } from 'antd';

const Comment = (props) => {
    return (
        <div>
            <div className='msg-info'>
                <h6>{props.username}</h6>
                <p>{props.time}</p>
            </div>
            <p>{props.context}</p>
            
            
            <Divider />
        </div>

    )
}

export default Comment