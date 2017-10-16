import React from 'react'
import * as T from "prop-types";
import './styles.scss'
import A_Logo from 'A_Logo'
import BurgerBtn from './BurgerBtn'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_MainLayoutHeader_H')

const _getMenuLinks= (links) => (
  links.map(link => (
    <li
      className={cn('menu-link')}
      key={`${link}-menu-link`}
    >
      {link}
    </li>
  ))
)

const SE_MainLayoutHeader_H = ({mix, menuLinks, mobileMenuIsActive, toggleMobileMenu}) => (
  <header
    className={cn([mix])}
  >
    <A_Logo
      theme='dark'
      size='normal'
    />

    <ul className={cn('menu')}>
      {_getMenuLinks(menuLinks)}
    </ul>

    <BurgerBtn
      mix = {cn('menu-btn')}
      toggleMobileMenu = {toggleMobileMenu}
      isActive = {mobileMenuIsActive}
    />
  </header>
)

export default SE_MainLayoutHeader_H

SE_MainLayoutHeader_H.propTypes = {
  mix: T.string, //BEM mixin from parent block
  menuLinks: T.array.isRequired, //links for header menu
  toggleMobileMenu: T.func.isRequired, //
};