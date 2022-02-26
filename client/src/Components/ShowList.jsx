import React,{useState} from 'react'
import { Button, Dropdown, Modal, Badge } from 'react-bootstrap'
import { FaGlobe, FaList, FaDownload } from 'react-icons/fa'
import "../Styles/ShowList.css"

export default function ShowList( data) {
    //for opening/closing response modal
  const [modal, setModal] = useState(false);
  const handleModalClose = () => setModal(false);
  const handleModalShow = () => setModal(true);

  return (<>
  {console.log(data)}
<div className="dataContainer ">
    <div className="mainData">
      <div className="lead p-4"><strong>{data.company_overview.name}</strong></div>
      <Badge bg="secondary dataBadge">{data.type}</Badge>{' '}
    </div>
    <div className="dataButtons">-
      <Button className="listButton" href={data.company_overview.website}><FaGlobe className="dataIcons m-3">{''}</FaGlobe></Button> 
      <FaList onClick={handleModalShow} className="dataIcons m-3" />
      <Dropdown>
        <Dropdown.Toggle className="listDropdown" id="dropdown-basic">
          <FaDownload />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href={data.pdf_downloadlink}>Download for Students</Dropdown.Item>
          <Dropdown.Item href={data.pdf_viewlink}>View</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
  <Modal show={modal} onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>{data.company_overview.name}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModalClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleModalClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
</>
  )
}
