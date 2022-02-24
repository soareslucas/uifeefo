import React from 'react';
import SalesStats from "./sales-stats";
import ContactInfo from "./contact-info";

import PropTypes from 'prop-types';


import './account-overview.css';

export const AccountOverview = ({data}) => {

  return (

    <div className="AccountOverview">
      <div className="wrapper">
          <div className="titleOverView">Account Overview</div>
          <div className="contact"><ContactInfo  supportContact={data.supportContact}/></div>
          <div className="salesStats"> <SalesStats  salesOverview={data.salesOverview}/> </div>  
      </div>
    </div>

  )
}

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired
}

export default AccountOverview;
