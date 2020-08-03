import React, { Component, Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AlertStyled from './AlertStyled';
import { ALERT_TYPE } from '../enums';

const config = {
  [ALERT_TYPE.SUCCESS]: {
    timeout: 5000,
    title: 'Success',
    iconName: 'check-circle-full',
  },
  [ALERT_TYPE.DANGER]: {
    timeout: 5000,
    title: 'Danger',
    iconName: 'exclamation-full',
  },
  [ALERT_TYPE.CUSTOM_DANGER]: {
    timeout: 5000,
    title: 'Danger',
    iconName: 'exclamation-full',
  },
  [ALERT_TYPE.INFO]: {
    timeout: 4000,
    title: 'Info',
    iconName: 'info-circle',
  },
  [ALERT_TYPE.WARNING]: {
    timeout: 2000,
    title: 'Warning',
    iconName: 'warning-full',
  },
};
const propTypes = {
  /**
   * @default null
   * children passed within alert
   */
  children: PropTypes.node,
  /**
   * @default ''
   * className passed along with the alert
   */
  className: PropTypes.string,
  /**
   * @default false
   * alert is primary or not.
   */
  primary: PropTypes.bool,
  /**
   * @default false
   * alert is secondary
   */
  secondary: PropTypes.bool,
  /**
   * @default false
   * alert is small
   */
  small: PropTypes.bool,
  /**
   * @default false
   * small
   */
  active: PropTypes.bool,
  /**
   * @default false
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * @default false
   * type
   */
  type: PropTypes.string,
  position: PropTypes.string,
};

const defaultProps = {
  children: 'Wrap your alert message in react this props children',
  className: '',
  active: false,
  disabled: false,
  type: ALERT_TYPE.INFO,
  position: 'bottom'
};

function Alert ({
  children, title, type, className, active, iconName, onChange, timeout, ...otherProps
}) {
  const delay = timeout ? timeout : config[type].timeout;
  const [status, changeStatus] = useState(active);
  useEffect(() => {
    setTimeout(() => changeStatus(false), delay);
  }, [active]);

  const classes = classNames({
    active,
    iconName,
  }, className);
  return (
    status && (
      <>
        <AlertStyled type={type} {...otherProps}>
          <div className={`alert-container ${classes}`}>
            <div className={`alert alert-${type || 'info'}`}>
              <strong className="alert-lead">
                { config[type].title }
                :
                {' '}
              </strong>
              <span className="alert-message">
              {children}
            </span>
            </div>
          </div>
        </AlertStyled>
      </>
    )
  );
}

Alert.propTypes = propTypes;

Alert.defaultProps = defaultProps;

export default Alert;
