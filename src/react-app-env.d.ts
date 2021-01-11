/// <reference types="react-scripts" />

// error fix
declare module "react/jsx-runtime" {
  export default any;
}

declare module 'react-router-dom';
