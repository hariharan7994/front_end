import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash } from 'react-feather';
import { id } from 'date-fns/locale';



function Categories() {
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    Videos: []
  })
  const [categories, setCategories] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }
  console.log(catInputs);
  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })
    const { name } = catInputs
    if (name == "") {
      toast.error('please enter a caption', {
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
    else {
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        getAllCategories()
        // console.log();
        toast.success(`${result.data.name} Added`, {
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
    }

  }
  // console.log(catInputs);
  const getAllCategories = async () => {
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {

      setCategories(result.data);
    }
  }

  // console.log(categories);

  const removeCategory = async (id) => {
    const result = await deleteCat(id)
    if (result.status >= 200 && result.status < 300) {
      getAllCategories()
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragged over the cat");
  }

  const dropped = async (e, id) => {
    console.log("dropped cat id", +id);
    const videoId = e.dataTransfer.getData("cardId")
    console.log(videoId);
    const { data } = await getVideo(videoId)
    console.log(data);

    const selectedCategory = categories.find(i => i.id == id)
    console.log(selectedCategory);

    selectedCategory.Videos.push(data)
    console.log(selectedCategory);

    await updateCategory(id, selectedCategory)




  }

getAllCategories()



  return (
    <div>

      <Button className='w-100 ms-4' variant="light" onClick={handleShow}>
        <h4><span>A</span>dd <span>C</span>ategory</h4>
      </Button>
      {
        categories.length > 0 ? (
          categories.map(i => (
            <div droppable

              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropped(e, i?.id)}

              className='border mt-3 p-3 text-center ms-5'>
              <h4><span className='fs-4'> {i.name}</span></h4>
              <div className='text-end'>
                <Trash onClick={() => { removeCategory(i.id) }} size={55} className='text-danger btn'></Trash>
              </div>
              {
                i.Videos.map(j=>(
                    <img style={{height:'70px',width:'70px', padding:'5px'}} src={j.Cover_image} alt=''/>
                ))
              }
            </div>
          ))
        ) : <h3 className='text-center mt-3'> No Categories Added yet </h3>

      }



      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-black border' closeButton>
          <Modal.Title> <h3 className='text-light'><span>A</span>dd <span>N</span>ew <span>C</span>ategory</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black border mt-2'>
          <FloatingLabel
            controlId="floatingInput"
            label="category Name"
            className="mb-3 mt-5 text-black"
          >
            <Form.Control onChange={(e) => setInputs(e)} name="name" type="text" />
          </FloatingLabel>


        </Modal.Body>
        <Modal.Footer className='bg-black border'>

          <Button variant="danger" onClick={addData}>
            Add</Button>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Categories