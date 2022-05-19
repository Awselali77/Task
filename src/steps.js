import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './steps.css';
import Progressbar from './Progress_bar';
import logo from './logo.png';
import TagIcon from '@mui/icons-material/Tag';
import PermDeviceInformationOutlinedIcon from '@mui/icons-material/PermDeviceInformationOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';


export default function Steps() {
  return (
    <div className="Steps">
    <img src={logo} className="App-logo" alt="logo" />

    <Box className="box" >

      <div className="tab" >
      <TagIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 1</div>
      <div className="text-n-1">CR number</div>
      </div>
      </div>

      <div className="tab tab-n-2" >
      <PermDeviceInformationOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 2</div>
      <div className="text">General info</div>
      </div>
      </div>

      <div className="tab" >
      <ContactPageOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 3</div>
      <div className="text">Contacts</div>
      </div>
      </div>

      <div className="tab" >
      <Inventory2OutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 4</div>
      <div className="text">Product details</div>
      </div>
      </div>

      <div className="tab" >
      <AccountBalanceWalletOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 5</div>
      <div className="text">Financial details</div>
      </div>
      </div>

      <div className="tab" >
      <ArticleOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 6</div>
      <div className="text">Documents</div>
      </div>
      </div>

      <div className="tab" >
      <HistoryOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 7</div>
      <div className="text">History</div>
      </div>
      </div>

      <div className="tab" >
      <RateReviewOutlinedIcon fontSize="large" className="icon" />
      <div>
      <div className="mini-text" >STEP 8</div>
      <div className="text">Preview and Submit</div>
      </div>
      </div>

    </Box>
    <hr/>
    <div className="text-1">
    You finished 10% of the application
    <Progressbar bgcolor="#08b132" progress='25'  height={15} />
    </div>
    </div>

  );
}
