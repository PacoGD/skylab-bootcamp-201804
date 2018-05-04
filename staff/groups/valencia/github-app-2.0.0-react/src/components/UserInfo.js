import React from 'react'

function UserInfo(props) {
    
return Object.keys(props.infor).length > 0 &&
    <section className="right">
        <div className="container-user">
            <img src={props.infor.avatar_url} />
        
            <div>
                <small>Username:<br/></small> 
                <p>{props.infor.login}</p>
            </div>
            <div>
                <small>Name:<br/></small> 
                <p>{props.infor.name}</p>
            </div>
            <div>
                <small>Followers:<br/></small> 
                <p>{props.infor.followers}</p>
            </div>
            <div>
                <small>Following:<br/></small> 
                <p>{props.infor.following}</p>
            </div>
        </div>
    </section>}

export default UserInfo;