import React from 'react'

function UserList(props) {

    return props.listuser.length > 0 &&
        <section className="left">
            {props.listuser.map(data =>
                <div key={data.id} onClick={(e) => {
                    e.preventDefault();
                    props.show(data.login)
                }}>
                    <img src={data.avatar_url} />
                    <h6>{data.login}</h6>
                </div>)}
        </section>
}

export default UserList;