import React from 'react'
function Search(props) {
    return  <form onSubmit={props.form}>
        <input type="text" placeholder="Search github username" onChange={props.input} value={props.value}/>
        <button>Search</button>
    </form>
}
export default Search;
