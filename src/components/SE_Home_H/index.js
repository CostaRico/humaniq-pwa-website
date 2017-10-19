import React from 'react'
import EmpoweringSection from './sections/EmpoweringSection'
import FirstMobileSection from './sections/FirstMobileSection'
import UnbankedStatSection from './sections/UnbankedStatSection'
import QuotesSection from './sections/QuotesSection'
import WhatMakesSection from './sections/WhatMakesSection'
import SafetySection from './sections/SafetySection'
import OpportunitiesSection from './sections/OpportunitiesSection'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_H')

const SE_Home_H = () => (
  <div className={cn()}>
    <EmpoweringSection mix={cn('section')} />
    <FirstMobileSection mix={cn('section')} />
    <UnbankedStatSection mix={cn('section')} />
    <QuotesSection mix={cn('section', {type: 'no-padding'})} />
    <WhatMakesSection mix={cn('section')} />
    <SafetySection mix={cn('section')} />
    <OpportunitiesSection mix={cn('section')} />
  </div>
)

export default SE_Home_H