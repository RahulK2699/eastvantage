import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { getUserData } from '../Apis.ts';
import { errorHandling, setDataToLocalStorage } from '../helper/helper.ts';

import { Results, Info } from '../types/profile-types.ts';
import ProfileData from '../components/Profile/ProfileData.tsx';
import ShimmerUI from '../components/Profile/ShimmerUI.tsx';
import { API_ERROR, LOCAL_STORAGE_KEY } from '../constants/constant.ts';

interface userData {
  info : Info,
  results: Results,
}

const Profile = () => {

  const [userData, setUserData] = useState<userData | null>(null)

  const fetchUserData =  async() => {
    try {
      const res: AxiosResponse<userData> | any = await getUserData();
      setUserData(res);
      setDataToLocalStorage(LOCAL_STORAGE_KEY, res);
      
    }catch (err) { errorHandling(API_ERROR)}
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
  return <ShimmerUI/>
}

 return (
  <div className='profile__wrapper'>
    <div className='profile'>
      <ProfileData 
        userData={userData} 
        fetchUserData={throttledFetchUserData}
      />
    </div>
  </div>
)
}

export default Profile
