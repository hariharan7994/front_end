import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({update}) {
  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    Cover_image: "",
    Video_Url: ""
  })
  const SetValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })

  }
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    // console.log(videoUrl);
    if (videoUrl.includes("v=")) {
      let subUrl = videoUrl.split("v=")[1]
      let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
      setInputs({ ...inputs, ["Video_Url"]: finalUrl })
    }

  }
  const addHandle = async () => {
    let id = uniqid()

    setInputs({ ...inputs, ["id"]: id })

    const {caption,Cover_image,Video_Url}=inputs

    if(caption=="" || Cover_image=="" || Video_Url=="" ){
      toast.error('All Inputs Are Reqired', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      const result = await addVideo(inputs)
      console.log(result);  
  
      if (result.status >= 200 && result.status < 300) {
        update(result.data)
       
       toast.success('Video Added', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setShow(false)
      }
    }

    

    // alert("button clicked")
    // setShow(false);
  }


  console.log(inputs);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <i onClick={handleShow} class="fa-solid fa-upload fa-fade fa-3x text-warning"></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-black border' closeButton>
          <Modal.Title> <h3 className='text-light'><span>U</span>pload <span>V</span>ideo</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black border mt-2'>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3 mt-5 text-black"
          >
            <Form.Control name='caption' onChange={(e) => SetValues(e)} type="text" />

          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Cover Image URL" className='text-black'>

            <Form.Control name='Cover_image' onChange={(e) => SetValues(e)} type="text" />


          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="YouTube Video URL"
            className='text-black mt-3 mb-5'>
            <Form.Control onChange={(e) => extractUrl(e)} type="text" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer className='bg-black border'>
          <Button variant="danger" onClick={addHandle}>
            Add
          </Button>
          <Button variant="light" onClick={handleClose}>
            Close</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  )
}

export default Add