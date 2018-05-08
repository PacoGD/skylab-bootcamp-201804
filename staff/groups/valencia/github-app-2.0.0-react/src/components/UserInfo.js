import React from 'react'

function UserInfo(props) {
return props.infor !== undefined &&
    <section className="right">
      <ul>
        <h2>{props.infor.login}</h2>
        <h2>
          {props.infor.name}
        </h2>
        <h2>
          {props.infor.followers}
        </h2>
        <h2>
          {props.infor.following}
        </h2>
      </ul>
    </section>}

export default UserInfo;