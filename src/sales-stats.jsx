import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


import styled from 'styled-components';
import './sales-stats.css';


function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (

    <div>
            <strong>  <span> { Math.round(score / total * 100) }%  </span> </strong>
            <p className="bold medium"> { label } </p>
    </div>
  )
}

function isNumeric(value) {
  const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
  return Number.isFinite(value) || ((typeof value === "string") && regex.test(value));
}


function validatedType(...validators) {
  return function(props, propName, componentName) {
  
    const value = props[propName];
    
    const valid = validators.every(validator => {
      if (typeof validator === "function") {
        const result = validator(value);
        return (typeof result === "boolean") && result;
      }
      
      return false;
    });
    
    if (!valid) {
      return new Error(`Invalid prop \`${propName}\` passed to \`${componentName}\`. Validation failed.`);
    }
    
  }
}

PercentageStat.propTypes = {
  label: PropTypes.string.isRequired,
  score: validatedType(isNumeric),
  total: validatedType(isNumeric)
}


export const SalesStats = ({salesOverview}) => {
  console.log(salesOverview);

  return (


    <div className="card">
            <div className="grid-container">
                <div className="sales">
                    <div className="salesTitle">
                      <FontAwesomeIcon icon={faUpload} />  <strong> Sales </strong>  
                    </div>
                    <div className="numbers">
                      <p> 
                         You had <strong > {salesOverview.successfulUploads} uploads </strong>  and  <strong> {salesOverview.linesSaved} </strong> lines added.
                      </p>
                    </div>
                </div>
                <div className="info"> 
                  <FontAwesomeIcon icon={faInfoCircle} /> 
                </div>
                <div className="upload">
                  <PercentageStat label="Upload Success" total={salesOverview.uploads} score={salesOverview.successfulUploads} />
                </div>  
                <div className="line">
                  <PercentageStat label="Lines Saved" total={salesOverview.linesAttempted} score={salesOverview.linesSaved} />
                </div>
            </div>
    </div>


  )
}

SalesStats.propTypes = {
  salesOverview: PropTypes.object.isRequired
}

export default SalesStats;
