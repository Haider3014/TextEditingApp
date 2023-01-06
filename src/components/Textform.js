import React , {useState} from 'react'

export default function Textform(props) {

    const handle1=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)

    };

    const handle2=(event)=>{
        setText(event.target.value)
    };

    const handle3=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)

    };
    const handle4=()=>{
        let newtext=text.split(' ').reverse().join(' ');
        setText(newtext)

    };

    const [text,setText]=useState('Default line');
  return (
    <>
    <div className='container my-4 mb-3' >
            <label htmlFor="mybox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="mybox" rows='8' value={text} onChange={handle2}></textarea>
            <button type="button" className='btn btn-primary my-3'  onClick={handle1}>Click for UPPERCASE</button>
            <button type="button" className='btn btn-primary my-3 mx-1' onClick={handle3}>Click for lowercase</button>
            <button type="button" className='btn btn-primary my-3 mx-1' onClick={handle4}>Click for reverse</button>
    </div>
    <div className="container my-3">
        <h1>Counter</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p></p>
    </div>
    </>

  )
}
