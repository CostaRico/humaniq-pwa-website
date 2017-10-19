import React from 'react'
import SectionCounter from '../common/SectionCounter'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_WhatMakes');

const SE_Home_WhatMakes = ({mix}) => (
  <section className={cn([mix])}>
    <img
      className= {cn('background')}
      src="https://lp.humaniq.com/img/head.svg"
    />
    <div className={cn('content')}>
      <h2 className={cn('title')}>
        What makes Humaniq<br/>a big thing
      </h2>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>
    <SectionCounter
      sectionNum={5}
      theme='bright'
    />
  </section>
)

export default SE_Home_WhatMakes


const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Connecting the unbanked',
    text: '10 years of research across Asia and Africa, carried out by the authors of Portfolios of the Poor, showed that poverty proliferates in regions whose inhabitants do not have access to financial services. Humaniq is becoming the simplest route to financial inclusion for billions of people.'
  } ,
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'User base exponential growth',
    text: 'According to Metcalfe\'s law, the value of a network is proportional to the square of the number of its users. For Humaniq, this means that the more unbanked people who have already joined the system, the greater the motivation will be for other people to join.'
  }
]