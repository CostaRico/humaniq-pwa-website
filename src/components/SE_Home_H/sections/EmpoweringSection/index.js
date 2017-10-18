import React from 'react'
import * as T from "prop-types"
import SectionCounter from '../common/SectionCounter'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_Empowering');

const SE_Home_Empowering = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('left-side')}>
      <div className = {cn('map')}/>
    </div>

    <div className={cn('right-side')}>
      <div className={cn('text')}>
        <h1 className={cn('text-title')}>Empowering<br/>the unbanked</h1>
        <p className={cn('text-subtitle')}>Self-deploying financial<br/>infrastructure: true hope for<br/>the unbanked, blue ocean<br/>for business</p>
      </div>
    </div>

    <p className={cn('hmq-description')}>
      A project on a global scale, receiving<br/> support from the UN and over 10,000 investors.
    </p>

    <div className={cn('members')}>
      <div className={cn('members-number')}>1 206 759</div>
      <p className={cn('members-text')}>people have already joined Humaniq</p>
    </div>

    <SectionCounter
      sectionNum={1}
      theme='dark'
    />
  </section>
)

export default SE_Home_Empowering

SE_Home_Empowering.propTypes = {
  mix: T.string, //BEM mixin from parent block
}