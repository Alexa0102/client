import React from 'react'
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import DUMMY_DATA from '../util/dummyData';
import SelectedBag from '../components/bags/SelectedBag';

const DetailsPage = () => {
    const params = useParams();
    const bag = DUMMY_DATA.find(
      (bag) => bag.id === params.bagId
    );
  
    if (!bag) {
      return <p>No bag found!</p>;
    }
  return (
    <div>
         <Fragment>
      <SelectedBag
        image={bag.image}
        name={bag.name}
        year={bag.year}
        color={bag.color}
        description={bag.description.toUpperCase()}
      />
      {/* <Route path={`/travel/${params.countryId}/comments`}></Route> */}
    </Fragment>
    </div>
  )
}

export default DetailsPage
