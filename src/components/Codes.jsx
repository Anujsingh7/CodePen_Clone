
import {Box,styled} from '@mui/material'
import Editor from "./Editor";
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';


const Container =styled(Box)
`display:flex;
 background:#060606;
 height:50vh;
`

const Codes =()=>{
    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return (
        <Container>
        <Editor
            style={{}}
            heading="HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
        />
        <Editor
            heading="CSS"
            icon="*"
            color="#0EBEFF"
            value={css}
            onChange={setCss}
        />
        <Editor
            heading="JS"
            icon="( )"
            color="#FCD000"
            value={js}
            onChange={setJs}
        />
        </Container>

    )
}
export default Codes;