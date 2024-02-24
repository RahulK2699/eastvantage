import React, { useEffect, useState } from 'react'
import { Info, Results } from '../../types/profile-types'

interface userData {
  results: Results,
  info : Info
}

type Props = {
   userData :  userData | null
}

const ProfileData :React.FC<Props> = (props) => {

  const [userData, setUserData] = useState<Results[]>([])
  const { userData: data } = props;

  useEffect(() => {
    const results: Results[] = (data?.results || []) as Results[];
    setUserData(results);
  }, [data]);
  
  return (
    <div className='profile__info--container'>
      {
        userData.map((result) => {
          const {name, location, id, picture } = result;
          return (
            <div key={id?.name} className='prodile__info--wrapper'>
              <img 
                className='prodile__info--profile-icon' 
                src = {picture?.large} 
                alt = "profile"
              />

              <h1 className='prodile__info--heading'>
                {name?.title} {name?.first} {name?.last}
              </h1>

              <p className='prodile__info--address'>
                {location?.city}, {location?.state} {location?.postcode}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProfileData
