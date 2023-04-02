import React from 'react'
import BrandItem from './BrandItem'
import DUMMY_DATA from '../../util/dummyData'


const BrandsMapping = () => {
  return (
    <div style={{marginBottom:'5rem', marginTop:'2rem'}}>
      {DUMMY_DATA.map((bag) => (
            
                <div style={{display: "flex", justifyContent: "center"}}>
                    <BrandItem logo={bag.logo} name={bag.name} id={bag.id} about={bag.about}  />
                </div>
          
        ))}
    </div>
  )
}

export default BrandsMapping
