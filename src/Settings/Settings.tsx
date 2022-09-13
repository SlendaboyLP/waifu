import React, { useEffect } from 'react'

export default function Settings({user, setUser}:any) {

  useEffect(() => console.log(user), [])


  useEffect(() => console.log(user), [user])

  

  // muas n raphi frogen wegen dem idk wos scho wida foisch is
  return (
    <div>
      {/* {user ? user.userID : "d3"} */}

      {/* moch des mid dem setuser und des weirden spreading dings des da raphi ba de keys gmochd hod */}
      {/* <button onClick={() => setUser(...user, user.collection.is_nsfw = true)}>nsfw</button> */}
      {/* when settings and tag preferences are possible the user cant be allowed to use tags that dont work together */}

      {user ? <p>{user.userID}</p> : "loading"}
    </div>

  )
}
