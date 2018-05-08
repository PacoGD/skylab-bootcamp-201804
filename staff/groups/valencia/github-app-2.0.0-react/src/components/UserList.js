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
                    {data.login}
                </div>)}
        </section>
}

export default UserList;