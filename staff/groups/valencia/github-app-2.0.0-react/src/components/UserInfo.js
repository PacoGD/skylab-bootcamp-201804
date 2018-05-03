import React from 'react'

function UserInfo(props) {
    
return Object.keys(props.infor).length > 0 &&
    <section className="right">
        <img src={props.infor.avatar_url} />
      
        <div>
            <small>Username:<br/></small> 
            {props.infor.login}</div>
        <div>
            <small>Name:<br/></small> 
            {props.infor.name}
        </div>
        <div>
            <small>Followers:<br/></small> 
            {props.infor.followers}
        </div>
        <div>
            <small>Following:<br/></small> 
            {props.infor.following}
        </div>
      
    </section>}

export default UserInfo;