import React from 'react';
import './App.css';
import Socket from 'socket.io';

function App() {

  // handlePencilClick=()=>{

  // }

  return (
    <div className="App" style={{
      margin: 10, padding: 10, marginBottom: 5

    }}>
      <div className="alert alert-info"
        style={{
          padding: '10px !important', marginBottom: 5,
          color: '#31708f', backgroundColor: '#d9edf7', borderColor: '#bce8f1',
          border: '1px solid transparent', borderRadius: 4,
        }}>
        <strong>Socket IO &#10084;</strong>  - This is a Multi-Users Drawing board, Open <a className="linkToBoard" style={{ cursor: 'pointer', color: '#ff002d' }} target="_blank">link</a> in another tab or Open in another computer try drawing simultaneously in both. <strong>Cool, isn't ?</strong>
      </div>
      <p>
        <button type="button" className="btn btn-warning btn-sm" value="pencil" id="pencil-button">Pencil</button>
        <button type="button" className="btn btn-warning btn-sm" value="rect" id="rect-button">Rectangle</button>
        <button type="button" className="btn btn-warning btn-sm" value="circle" id="circle-button">Circle</button>
        <button type="button" className="btn btn-warning btn-sm" value="ellipse" id="ellipse-button">Ellipse</button>
        <button type="button" className="btn btn-warning btn-sm" value="line" id="line-button">Line</button>
        <button type="button" className="btn btn-warning btn-sm" value="text" id="text-button">Text</button>
        <button type="button" className="btn btn-warning btn-sm" id="clear-all">Clear All</button>
        <div style={{ padding: 20, display: 'inline'}}><label for="colour" style={{ position: 'absolute' }}>Colour : </label>
          <input id="colour-picker" value="#000000" style={{ width: 80 }} 
          className="jscolor, {{width:243, height:150, position:'right',
    borderColor:'#FFF', insetColor:'#FFF', backgroundColor:'#666'}}"></input>
        </div>
        <span className="form-group" style={{ width: 90, display: 'inline-block' }}>
          <label for="line-Width">Thickness: </label>
          <select className="form-control" id="line-Width">
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>14</option>
          </select>
        </span>
        <span className="form-group" style={{ width: 130, display: 'inline-block' }}>
          <label for="draw-text-font-family">Font: </label>
          <select className="form-control" id="draw-text-font-family">
            <option value="Arial">Arial</option>
            <option value="Verdana" selected>Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="serif">serif</option>
            <option value="sans-serif">sans-serif</option>
          </select>
        </span>

        <span className="form-group" style={{ width: 90, display: 'inline-block' }}>
          <label for="draw-text-font-size">Font Size: </label>
          <select className="form-control" id="draw-text-font-size">
            <option value="16">16 Px</option>
            <option value="18">18 Px</option>
            <option value="20">20 Px</option>
            <option value="22">22 Px</option>
            <option value="24">24 Px</option>
            <option value="26">26 Px</option>
            <option value="28">28 Px</option>
            <option value="30">30 Px</option>
            <option value="32" selected>32 Px</option>
            <option value="34">34 Px</option>
            <option value="36">36 Px</option>
            <option value="38">38 Px</option>
            <option value="40">40 Px</option>
          </select>
        </span>
      </p>
      <div id="container">
        <canvas id="imageView" height="400" style={{height: '100%'}}>
          <p>Unfortunately, your browser is currently unsupported by our web
          application.  We are sorry for the inconvenience. Please use one of the
          supported browsers listed below, or draw the image you want using an
            offline tool.</p>
          <p>Supported browsers: <a href="http://www.opera.com">Opera</a>, <a
            href="http://www.mozilla.com">Firefox</a>, <a
              href="http://www.apple.com/safari">Safari</a>, and <a
                href="http://www.konqueror.org">Konqueror</a>.</p>
        </canvas>
      </div>
    </div>
  );
}

export default App;
