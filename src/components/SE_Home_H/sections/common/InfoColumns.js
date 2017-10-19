import React from 'react'
import * as T from "prop-types"
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_InfoColumns');

const _createInfoColumns = (columns) => (
  columns.map((column, index) => (
    <div
      key={`info-column-${index + 1}`}
      className={cn('column')}
    >
      <img
        className={cn('column-image')}
        src={column.imageSrc}
      />
      <h3 className={cn('column-title')}>{column.title}</h3>
      <p className={cn('column-text')}>{column.text}</p>
    </div>
  ))
)

const SE_Home_InfoColumns = ({mix, columns, type}) => (
  <div className={cn([mix], {type})}>
    {_createInfoColumns(columns)}
  </div>
)

export default SE_Home_InfoColumns

SE_Home_InfoColumns.propTypes = {
  mix: T.string, //BEM mixin from parent block
  columns: T.array.isRequired, //Columns to render
  type: T.oneOf([
    'narrow', //400px column width
    'small-text', //small text inside column
  ])
}