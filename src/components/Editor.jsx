
 
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import  'codemirror/mode/javascript/javascript';
import  'codemirror/mode/css/css';

import '../App.css';
import { useState } from 'react';

const Heading=styled(Box)
` background:#1d1e22;
  display:flex;
  padding:9px 12px;
 

`
const Header=styled(Box)
`
${'' /* curser:pointer; */}
  display: flex;
  background:#060606;
  color:#AAAEBC;
  justify-content:space-between;
  font-weight:700;
`
const Container=styled(Box)
`
height:100%;
width:115px;
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px ;


`
const Editor =({heading,icon,language,color,value,onChange})=>{
  const handleChange=(editor,data,value)=>{
       onChange(value);
  }
  const [open,setOpen]=useState(true);
    return (
        //main box
        <Container style={open ? null:{flexGrow:0}}>
          {/* upper portion */}
            <Header>
              {/* upper box divide */}
                <Heading>
                    <Box 
                     
                    component='span' style={{background:color,height:20,
                    width:20,
                    display:'flex',
                    // placeContent:'center',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    marginRight:5,
                    paddingBottom:2,
                    color:'#000'
                    }}
                    >{icon}</Box>
                    {heading}   
                </Heading>
                <CloseFullscreenIcon
                  fontSize='small'
                  style={{ alignSelf:'center',
                  cursor:'pointer'}}
                  onClick={()=>{
                    // console.log("clicked")
                    setOpen(preState=>!preState)
                  }}
                />
            </Header>
            {/* lower portion  text editor*/  }
           <ControlledEditor
             
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                //  mode: 'xml',
                //  
                lineWrapping: true,
                    lint: true,
                    // mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
           />
        </Container>
    )
}
export default Editor;