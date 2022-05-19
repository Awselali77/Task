import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './forms.css';
import LooksTwoRoundedIcon from '@mui/icons-material/LooksTwoRounded';

export default function FormPropsTextFields() {
  return (
    <div className="main" >
    <div className="second">
    <LooksTwoRoundedIcon sx={{color: "#e85737", fontSize: 40, margin: "auto 0"}} />
    <h1>General info</h1>
    </div>

    <div className="general-info-box">

    <div>CR number</div>
    <div>18276447958</div>
    <div>verified</div>

    </div>
    <br/><br/><br/><br/>

    <h3>General company information</h3>
    <br/>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <div style={{ margin: "0 auto"}}>
        <TextField
          label="Company Name (English)"
          defaultValue="Al-Emdad LLC"
          style={{margin:0, marginRight:"20px", width:"48%"}}
        />
        <TextField
          label="Company Name (Arabic)"
          dir="rtl"
          defaultValue="Healthcare"
          style={{margin:0, width:"48%"}}
        />
        </div>
        <br/><br/>
        <div style={{ margin: "0 auto"}}>
          <TextField
            label="Company Name (English)"
            defaultValue="Al-Emdad LLC"
            style={{margin:0,marginRight:"20px", width:"63%"}}
          />
          <TextField
            label="Company Name (English)"
            defaultValue="Al-Emdad LLC"
            style={{margin:0, width:"33%"}}
          />
          </div>

      </div>
    </Box>
    <br/><br/><br/><br/>

    <h3>Communication</h3>
    <br/>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <div style={{ margin: "0 auto"}}>
        <TextField
          label="Mobile Number"
          defaultValue="+966 53133 8493"
          style={{margin:0, marginRight:"20px", width:"48%"}}
        />
        <TextField
          label="Phone Number"
          defaultValue="+966 53133 8493"
          style={{margin:0, width:"48%"}}
        />
        </div>
        <br/><br/>
        <div style={{ margin: "0 auto"}}>
          <TextField
            label="Email address"
            defaultValue="Healthcare@domain.com"
            style={{margin:0,marginRight:"20px", width:"100%"}}
          />
          <br/><br/><br/>
          <TextField
            label="Website ( Optional )"
            defaultValue="https://www.domain.com"
            style={{margin:0, width:"100%"}}
          />
          </div>

      </div>
    </Box>

    <br/><br/><br/><br/>

    <h3>Vendor Type</h3>
    <br/>
    <div className="radio-container">
  <div className="radio-box"><input className="radio-button" type="radio"></input><div>Small & Medium Enterprises</div></div>
  <div className="radio-box"><input className="radio-button" type="radio"></input><div>Trade</div></div>
  <div className="radio-box"><input className="radio-button" type="radio"></input><div>Manufacturer</div></div>
  </div>
  <br/>
  <div className="radio-container">
<div className="radio-box"><input className="radio-button" type="radio"></input><div>Contractor</div></div>
<div className="radio-box"><input className="radio-button" type="radio"></input><div>Agent</div></div>
<div className="radio-box"><input className="radio-button" type="radio"></input><div>Non Supplying Manufacturer</div></div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
