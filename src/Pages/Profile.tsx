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

  const fetchUserData = async () => {
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

 return (
  <div>
    <button onClick={() => fetchUserData()}>Refresh</button>
    <ProfileData userData={userData} />
  </div>
)
}

export default Profile
