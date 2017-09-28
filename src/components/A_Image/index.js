import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Image')
import isInitialLoad from 'utils/initialLoad'

class A_Image extends Component {

  state = {imgReady: false}

  handleLoad = () => {
    this.setState({imgReady: true})
  }

  componentWillReceiveProps(nextProps){
    if(this.props.src !== nextProps.src){
      this.setState({imgReady: false})
    }
  }
  componentDidMount(){
    const complete = this.node && this.node.complete
    if(isInitialLoad() && complete){
      this.forceUpdate()
    }
  }

  prepareRetina = (imgPath, retinaMax = 1) => {
    retinaMax = retinaMax === true ? (2) : (retinaMax);
    const
      pathArray = imgPath.split('.'),
      imgType = pathArray.pop(-1),
      pathStr = pathArray.join('.');

    let retinaPaths;

    switch(imgType) {
      case 'svg':
        retinaPaths = `${pathStr}.${imgType}`;
        break;
      default:
        let result = [];
        for(let i=1; i<=retinaMax; i++) {
          i === 1 ? (
            result = [...result, `${pathStr}.${imgType} ${i}x`]
          ):(
            result = [...result, `${pathStr}@${i}.${imgType} ${i}x`]
          );
        }
        retinaPaths = result.join(', ');
    }
    return retinaPaths
  };

  render() {
    let {rounded, realSize, link, type, src, srcSet, ...preProps} = this.props;
    const {onClick, objectFit, ...props} = preProps;
    const complete = !!this.node && this.node.complete;
    const imgReady = complete || this.state.imgReady;
    rounded = rounded && 'rounded';
    link = link && 'link'
    realSize = realSize && 'real-size';

    return (
      <span className={cn('root')} >
        <picture>
          <source srcSet={this.prepareRetina(src, srcSet)}/>
          <img
            ref={ node => this.node = node }
            className={cn('img', {onClick: !!onClick, objectFit, type}, [rounded, link, realSize])}
            onLoad = {this.handleLoad}
            style={imgReady ? {} : {display: 'none'}}
            onClick={onClick}
            src={src}
            {...props}
          />
        </picture>
        <div style={imgReady ? {display: 'none'} : {}} className={cn('loader')} >
          {/*loading*/}
        </div>
      </span>
    )
  }
}

A_Image.propTypes = {
  src: T.string.isRequired,
  srcSet: T.bool || T.number,
  alt: T.string.isRequired,
  width: T.number,
  height: T.number,
  onClick: T.func,
  objectFit: T.oneOf([
    'contain', // increases or decreases the size of the image to fill the box whilst preserving its aspect-ratio.
    'cover-hidden' // height 100% of widht
  ]),
  type: T.oneOf([
    'avatar',
    'avatar-sm'
  ]),
  realSize: T.bool, // width and height auto
  rounded: T.bool, // rounded Images.
  link: T.bool // remove space under the image in links
}

A_Image.defaultProps = {
  src: 'https://dummyimage.com/100x50/fff7ff/e0557d&title=NoPhoto',
  alt: '',
}

export default A_Image