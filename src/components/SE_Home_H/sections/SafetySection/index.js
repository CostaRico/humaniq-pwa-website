import React from 'react'
import SectionCounter from '../common/SectionCounter'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_Safety');

const SE_Home_Safety = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <h2 className={cn('title')}>
        Simplicity and safety for the unbanked
      </h2>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>
    <SectionCounter
      sectionNum={6}
      theme='dark'
    />
  </section>
)

export default SE_Home_Safety


const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Biometric identification',
    text: 'Users are verified by their face and voice, eliminating the need for formal documentation '
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Independent HMQ currency',
    text: 'Every new user receives $20 worth of HMQ in their account, the value of which bears no relation to their local currency'
  },
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'The interface is simple to interact with',
    text: 'Even for those who have never used gadgets before'
  }
]