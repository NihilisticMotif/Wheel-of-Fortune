// https://react.dev/learn/importing-and-exporting-components
import './main.css'
import {Names} from './lists'
import { useState } from 'react';

// --- CODE --------------------------------------------------------------------------------------------

export default function BasicReactTutorial01() {

// --- VARIABLE --------------------------------------------------------------------------------------------

const Variable: JSX.Element = <li>Invent new traffic lights</li>;

// --- FUNCTION --------------------------------------------------------------------------------------------

function Multiply(a: number, b: number):number {
  return a * b;}

function ReturnJSX(a: boolean):JSX.Element {
  if (a){return <li className='Red'>Color is Red</li>}
  else{return <li className='Blue'>Color is Blue</li>}}

// --- LOOP --------------------------------------------------------------------------------------------
// * https://react.dev/learn/rendering-lists
// * https://react.dev/learn/passing-props-to-a-component
const JSX_Name = Names.map((name:string,index) =>
  <li>No.{index}: {name}</li>
);

// --- RETURN CODE --------------------------------------------------------------------------------------------

return (
  <>
    <ul>
      <hr/>
      {Variable}
      <li>Rehearse a movie scene {Multiply(3,5)}</li>
      {ReturnJSX(true)}
      {ReturnJSX(false)}
      <hr/>
      <div className='Red'>
        {JSX_Name}
      </div>
    </ul>
  </>
);
}

