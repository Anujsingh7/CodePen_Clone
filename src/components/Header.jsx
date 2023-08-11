
import {AppBar,Toolbar,styled} from '@mui/material'

const Container=styled(AppBar)`
background:black;
${'' /* position: static; */}
height:9vh;
`

const Header=()=>{
    const logo ='https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1642454945/codepen-wordmark-display-inside-white@10x_163987fcdd/codepen-wordmark-display-inside-white@10x_163987fcdd.png?_i=AA'
    return (
           <Container position='static'>
            <Toolbar>
              <img src={logo} alt="logo" style={{height:"5.5vh"}}/>
            </Toolbar>
           </Container>
    )
}

export default Header