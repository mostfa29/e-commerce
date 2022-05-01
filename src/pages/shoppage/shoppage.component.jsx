import React from 'react'
import Collection from '../../components/collection/collection.component'
import './shoppage.style.scss'
import SHOP_DATA from  "../../constants/default_shop_data"
function ShopPage() {
  return (
      <div className='shopPage'>
          <h1>Shop Page</h1> 
 
          {SHOP_DATA.map(collection => 
            <Collection key={collection.id} title={collection.title} items={collection.items} />
        )}

      
      </div>
  )
}

export default ShopPage