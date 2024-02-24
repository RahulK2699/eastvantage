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
    <div>
      {
        userData.map((result) => {
          const {name, location, id } = result;
          return (
            <div key={id?.name}>
              <h1>{name?.title} {name?.first} {name?.last}</h1>
              <p>{location?.street?.number} {location?.street?.name}</p>
              <p>{location?.city}, {location?.state} {location?.postcode}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProfileData
