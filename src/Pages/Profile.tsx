import React, { useEffect, useState } from 'react'
import { getUserData } from '../apis.ts'

import { Results, Info } from '../types/profile-types.ts'
import ProfileData from '../components/Profile/ProfileData.tsx'

interface userData {
  results: Results,
  info : Info
}

const Profile = () => {

  const [userData, setUserData] = useState<userData | null>(null)

  const fetchUserData =  async() => {
    try {
      const res = await getUserData();
      setUserData(res);
      
    }catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUserData();
 },[])

 const throttle = (myFunc:Function, delay:number)  => {
  let timerId : any;

  return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timerId);
      timerId = setTimeout(() => myFunc.apply(context, args), delay);
  }

}

// Limit function call using throttling
const throttledFetchUserData = throttle(fetchUserData,300);

if(!userData) {
  return <div>Loading...</div>
}

 return (
  <div className='profile__wrapper'>
    <div className='profile'>
      {/* <button className='profile__refresh-btn' onClick={() => throttledFetchUserData()}>Refresh</button> */}
      <ProfileData 
        userData={userData} 
        fetchUserData={throttledFetchUserData}
      />
    </div>
  </div>
)
}

export default Profile
