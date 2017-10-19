import React from 'react'
import SectionCounter from '../common/SectionCounter'
import InfoColumns from '../common/InfoColumns'
import SectionButton from '../common/SectionButton'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_FirstMobile');


const SE_Home_FirstMobile = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <h2 className={cn('title')}>
        The first mobile service with<br/>the capacity to change the world
      </h2>
      <p className={cn('subtitle')}>Humaniq is a fourth generation mobile bank with its own<br/>cryptocurrency, which is bringing millions of unbanked<br/>people into one financial network</p>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>
    <SectionCounter
      sectionNum={2}
      theme='bright'
    />
    <SectionButton
      mix={cn('button')}
      text='Project details'
    />
  </section>
)

export default SE_Home_FirstMobile

const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For unbanked people',
    text: 'Humaniq opens up the benefits of financial inclusion and grants access to a series of financial services'
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'For businesses',
    text: 'Humaniq enables start-ups and projects to offer their services an audience of billions'
  }
]