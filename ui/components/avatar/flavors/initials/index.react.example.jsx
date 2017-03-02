// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Avatar } from 'ui/components/avatar/flavors/base/index.react.example';
import classNames from 'classnames';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Avatar>
    <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
  </Avatar>
);

export let states = [
  {
    id: 'avatar-square-initials',
    label: 'Square Initials',
    element:
      <Avatar className="slds-avatar--medium">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'avatar-circle-initials',
    label: 'Circle Initials',
    element:
      <Avatar className="slds-avatar--circle slds-avatar--medium">
        <abbr className="slds-avatar__initials slds-icon-standard-user" title="person name">AB</abbr>
      </Avatar>
  },
  {
    id: 'size-x-small',
    label: 'Size - X Small',
    element:
      <Avatar className="slds-avatar--x-small">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'size-small',
    label: 'Size - Small',
    element:
      <Avatar className="slds-avatar--small">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'size-medium',
    label: 'Size - Medium',
    element:
      <Avatar className="slds-avatar--medium">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  },
  {
    id: 'size-large',
    label: 'Size - Large',
    element:
      <Avatar className="slds-avatar--large">
        <abbr className="slds-avatar__initials slds-icon-standard-account" title="company name">Ac</abbr>
      </Avatar>
  }
];