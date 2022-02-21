import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

import "../Styles/ListingSection.css";

export default function ListingSection() {
  return (
    <>
    <div className="SearchBarContainer mx-5">
        <div className="searchBar ">
    <Form className="d-flex">
    <Button variant="outline-primary searchBarButton" id='btn1'><FaSearch />
</Button>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 searchform"
          aria-label="Search"
        />
        
      </Form>
      </div>
      <Button variant="outline-primary searchBarButton" id='btn2'>INF</Button>
      <Button variant="outline-primary searchBarButton" id='btn3'>JNF</Button>

      <div className="filterBar p-4">
<span>Filterbar</span>

      </div>


    </div>
    
    </>
  )
}
