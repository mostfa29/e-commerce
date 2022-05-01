import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection.styles.scss'

function Collection(props) {
  return (
      <div className='collection'>
          <h5 className='collection-title'>{props.title}</h5> 
          <div className='collection-items'>
              {props.items.filter((item,indx)=>indx<4).map((item) =>
                <CollectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                )}
          </div>
      </div>
  )
}

export default Collection