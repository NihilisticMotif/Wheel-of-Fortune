// https://react.dev/learn/importing-and-exporting-components
import './main.css'
import { ArtistLists , Artist} from './artist';
import { useState } from 'react';

// --- CODE --------------------------------------------------------------------------------------------

export default function RT02_Basic() {

// --- REACT HOOK --------------------------------------------------------------------------------------------
// * https://react.dev/reference/react/useState
const [SS_Color, setSS_Color] = useState<[number,number,number]>([0,0,0])
const [SS_StrColor, setSS_StrColor] = useState<[string,string,string]>(['0','0','0'])

// --- FUNCTION --------------------------------------------------------------------------------------------

function ReturnColor(a:number):string{
  if (a%2==0){
    return 'Red'
  }
  else{
    return 'Blue'
  }
}

function UpdateColor():void{
  // https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript
  const color0 = (document.getElementById("ID_Input0")as HTMLInputElement).value
  const color1 = (document.getElementById("ID_Input1")as HTMLInputElement).value
  const color2 = (document.getElementById("ID_Input2")as HTMLInputElement).value
  if (isNaN(parseFloat(color0))==false && isNaN(parseFloat(color1))==false && isNaN(parseFloat(color2))==false){
    const ColorLists = [parseFloat(color0),parseFloat(color1),parseFloat(color2)]
    let UpdateColor:[number,number,number] = [0,0,0]
    for(let i=0;i<3;i++){
      if (ColorLists[i]>255){
        UpdateColor[i] = 255
      }
      else if (ColorLists[i]<0){
        UpdateColor[i] = 0
      }
      else{
        UpdateColor[i] = ColorLists[i]
      }
    }
    setSS_Color(UpdateColor)
    setSS_StrColor([
      color0.toString(),
      color1.toString(),
      color2.toString()
    ])
  }
}

function UpdateStrColor(mode:'0'|'1'|'2'):void{
  // https://www.geeksforgeeks.org/react-onchange-event/
  const Input = (document.getElementById("ID_Input"+mode)as HTMLInputElement).value
  if (mode=='0'){
    setSS_StrColor([Input,SS_StrColor[1],SS_StrColor[2]])
  }
  if (mode=='1'){
    setSS_StrColor([SS_StrColor[0],Input,SS_StrColor[2]])
  }
  if (mode=='2'){
    setSS_StrColor([SS_StrColor[0],SS_StrColor[1],Input])
  }
}

function ResetToBlack():void{
  setSS_Color([0,0,0])
  setSS_StrColor(['0','0','0'])
}

// --- LOOP --------------------------------------------------------------------------------------------
// * https://react.dev/learn/rendering-lists
// * https://react.dev/learn/passing-props-to-a-component

const JSX_Artist = ArtistLists.map((artist:Artist,index)=>
  <>
  <div className={ReturnColor(index)}>
    <h1>Name: {artist.Name}</h1>
    <li>NotableSong: {artist.NotableSong}</li>
    <li>BirthDate: {artist.BirthDate[0]} / {artist.BirthDate[1]} / {artist.BirthDate[2]}</li>
    <li>ActiveYear: {artist.ActiveYear[0]} - {artist.ActiveYear[1]}</li>
  </div>
  </>
)

// --- RETURN CODE --------------------------------------------------------------------------------------------

return (
  <>
  <div className='Body'>
    <h1 style={{color: "rgb("+SS_Color[0].toString()+','+SS_Color[1].toString()+','+SS_Color[2].toString()+")"}}>CheChe</h1>
    <input id='ID_Input0' value={SS_StrColor[0]} onChange={() => {UpdateStrColor('0')}}></input>
    <input id='ID_Input1' value={SS_StrColor[1]} onChange={() => {UpdateStrColor('1')}}></input>
    <input id='ID_Input2' value={SS_StrColor[2]} onChange={() => {UpdateStrColor('2')}}></input>
    <button onClick={UpdateColor}>ChangeColor</button>
    <button onClick={ResetToBlack}>ResetToBlack</button>
  </div>
  {JSX_Artist}
  </>
);
}

