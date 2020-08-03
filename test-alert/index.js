import Alert from '../src/Alert';
import * as ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<div>
  this is alert
  <Alert active={true}/>
</div>, document.getElementById('root'));
