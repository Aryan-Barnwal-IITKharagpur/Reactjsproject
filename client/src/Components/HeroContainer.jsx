import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Hero_section = () => {

    return (
        <div className=''>
            <div className="jumbotron jumbotron-fluid p-2">
                <div className="pt-5 m-2 hero-content-container mx-auto" style={{ maxWidth: 1000 }}>
                    <div className='p-2 pt-5 container'>
                        <h1 className="display-1 fw-bold pt-5" style={{ letterSpacing: -3 }}>Career Development Center</h1>
                        <p>Welcome to the Career Development Centre Portal of Indian Institute of Technology. <br /> Click the suitable option below to fill the Notification Form.</p>
                        <Stack spacing={2} className="pt-5 d-flex justify-content-center" direction="row">
                            <Link to="/JNF_form/null" className='link-button'>
                                <Button className="contained text-white" to="/form">
                                    FILL JNF
                                </Button>
                            </Link>
                            <Link to="/INF_form/null" className='link-button'>
                                <Button className="contained text-white" to="/form">
                                    FILL INF
                                </Button>
                            </Link>
                        </Stack>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Hero_section


