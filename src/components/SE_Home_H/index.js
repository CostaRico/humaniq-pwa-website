import React from 'react'
import EmpoweringSection from './sections/EmpoweringSection'
import FirstMobileSection from './sections/FirstMobileSection'
import UnbankedStatSection from './sections/UnbankedStatSection'
import QuotesSection from './sections/QuotesSection'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_H')

const SE_Home_H = () => (
  <div className={cn()}>
    <EmpoweringSection mix={cn('section')} />
    <FirstMobileSection mix={cn('section')} />
    <UnbankedStatSection mix={cn('section')} />
    <QuotesSection mix={cn('section')} />
  </div>
)

export default SE_Home_H