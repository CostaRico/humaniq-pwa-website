import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_MainLayout_Header_BurgerBtn');

const SE_MainLayout_Header_BurgerBtn = ({mix, isActive, toggleMobileMenu}) => (
  <div
    className = {cn([mix], {isActive})}
    onClick = {() =>{toggleMobileMenu()}}
  >
    <div className = {cn('line',{position:'top'})} />
    <div className = {cn('line',{position:'middle'})} />
    <div className = {cn('line',{position:'bottom'})} />
  </div>
)

export default SE_MainLayout_Header_BurgerBtn

SE_MainLayout_Header_BurgerBtn.propTypes = {
  mix: T.string, //BEM mixin from parent block
  isActive: T.bool.isRequired //toggles btn animation
};