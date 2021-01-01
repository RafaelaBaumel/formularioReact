import React from 'react';
import Form from "./Pages/Inputs";
import Container from '@material-ui/core/Container';
import ToolBar from './Pages/Tittle';
import Fullwidth from './Pages/Fullwidth'


function App() {
  return (

    <>
      <Container maxWidth="md" style={{ padding: 20 }}>
        <ToolBar />
        <Form />
        <Fullwidth />
      </Container>  
    </>

  );
}

export default App;
