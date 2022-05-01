import React from 'react'
import './collection-item.styles.scss'

function CollectionItem(props) {
  return (
      <div className='collectionItem'>
          <div
              className='collectionItem-image'
              style={{ backgroundImage: `url(${props.imageUrl})` }}
          ></div>
          
          <div className='collectionItem-footer'>
              <div className='collectionItem-footer-name'> {props.name }</div> 
              <div className='collectionItem-footer-price'> {props.price }</div> 
          </div>

      </div>
  )
}

export default CollectionItem