 import React from 'react';
import { tsPropertySignature } from '@babel/types';
 const person =(props) => {
     return <p>I'm {props.name} and I am {Math.floor(Math.random() * 30)}</p>
 }

 export default person;