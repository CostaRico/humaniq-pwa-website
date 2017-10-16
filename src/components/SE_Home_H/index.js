import React from 'react'
import EmpoweringSection from './sections/EmpoweringSection'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_H')

const SE_Home_H = () => (
  <div className={cn()}>
    <EmpoweringSection mix={cn('section')} />
  </div>
)

export default SE_Home_H