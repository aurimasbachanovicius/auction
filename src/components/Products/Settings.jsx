import React from 'react';
import SortingModeSelect from './SortingModeSelect';
import ViewTypeSelect from './ViewTypeSelect';

const Settings = () => (
  <form className="form-inline">
    <SortingModeSelect availableModes={['Recent', 'AnotherMode', 'ThirdMode']} />
    <ViewTypeSelect availableTypes={['Cards', 'List', 'Compacted']} />
  </form>
);

export default Settings;
