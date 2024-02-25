import React from 'react'
import { Info, Results } from '../../types/profile-types'
import { EMAIL, PHONE, LOCATION, NEXT_CANDITATE } from '../../constants/constant.ts'

import Details from './Details.tsx'
import Button from '../common/Button.tsx'

//@ts-ignore
import call from '../../assets/call.svg'
//@ts-ignore
import email from '../../assets/mail.svg'
//@ts-ignore
import locationIcon from '../../assets/location-sharp.svg'


interface userData {
  results: Results,
  info : Info
}

type Props = {
   userData :  userData | null,
   fetchUserData: Function
}

const ProfileData :React.FC<Props> = (props) => {

  const { userData: data, fetchUserData } = props;
   const results: Results[] = (data?.results || []) as Results[];


  return (
    <div className='profile__info'>
      {
        results.map((result) => {
          const {name, id, picture, phone, email:emailId, location } = result;
          return (
            <div key={id?.name} className='profile__info--wrapper'>
              <div className='profile__info--profile-icon__container'>
                <img 
                  className='profile__info--profile-icon' 
                  src = {picture?.large} 
                  alt = "profile"
                />

                <h1 className='profile__info--heading'>
                  {name?.first} {name?.last}
                </h1>

              </div>
              <div className='profile__info--empty-box'></div>
              
             <div className='profile__info--details'>
            
              <Details
                icon={call}
                label={PHONE}
                text={phone}
              />

              <Details
                icon={email}
                label={EMAIL}
                text={emailId}
              />

              <Details
                icon={locationIcon}
                label={LOCATION}
                text={location?.city }
              />
             </div>

            <Button 
              className='profile__info--button' 
              onClick={() => fetchUserData()}
              >
                {NEXT_CANDITATE}
              </Button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProfileData
