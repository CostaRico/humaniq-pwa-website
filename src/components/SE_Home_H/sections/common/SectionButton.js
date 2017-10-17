import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_SectionButton');

const SE_Home_SectionButton = ({mix, text}) => (
  <div className={cn([mix])}>
    {text}
  </div>
)

export default SE_Home_SectionButton

SE_Home_SectionButton.propTypes = {
  mix: T.string, //BEM mixin from parent block
  text: T.string.isRequired, //Text to render inside button
}