import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './contact-info.css';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';



export const ContactInfo = ({supportContact}) => {
  console.log(supportContact);

  return (
            <div className="contactSupport">
                <div className="contactTitle">
                    YOUR FEEFO SUPPORT CONTACT
                </div>
                    <div className="symbol">
                        S
                    </div>

                    <div className="personal">

                        <div className="name">
                           <strong>{supportContact.name}</strong> 
                        </div>
                        <div className="email">
                            
                            <FontAwesomeIcon icon={faEnvelope} /> 

                            {supportContact.email}
                        </div>
                    
                    </div>


                    <div className="phone">
                      +55 62 994380302
                    </div>
            </div>

  )
}

ContactInfo.propTypes = {
  supportContact: PropTypes.object.isRequired
}

export default ContactInfo;
