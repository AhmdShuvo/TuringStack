import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const Dashboard = () => {
    const data=localStorage.getItem('admin@admin.com')
    console.log(data);


    return (
        <>

<Navbar>
  <Container>
    <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <span>{data.Name}</span>
      </Navbar.Text>
      <Navbar.Text><button onClick={()=>{localStorage.clear()
      window.location.replace('login')
    
      }}>Logout</button></Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
                    <Container>
                        <h3>Dash Board</h3>
                    </Container>

        </>
    );
};

export default Dashboard;