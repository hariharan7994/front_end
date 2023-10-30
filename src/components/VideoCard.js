import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';



function VideoCard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () => {
      setShow(true);
        var id=uniqid()
        var video_title=video.caption
        var url=video.Video_Url
        var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
        // console.log(date);

        const body={id,video_title,url,date}
        if(body){
          const result=await addHistory(body)
          console.log(result);
        }

    }
    const handleDelete=async(id)=>{
       const result=await deleteVideo(id)
       if(result.status>=200 && result.status<300){
              deleteFunc(result.data)
       }
    }
const dragStart=(e,id)=>{
  console.log("drag start-"+id);
  e.dataTransfer.setData("cardId",id)
}

  return (
    <div>
       <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='bg-black border border-dark mt-3 ms-2'
        style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow}
      style={{height:'250px',width:'100%'}}
      variant="top" src={video.Cover_image} />
      <Card.Body>
        <Card.Title><h5 className='text-light'>{video.caption}</h5></Card.Title>
        <div className='text-end'>
          <Trash2 onClick={()=>handleDelete(video.id)} size={50} className='text-danger btn'></Trash2>

       
        </div>
       
       
      </Card.Body>
    </Card>
   

      <Modal show={show} onHide={handleClose}>
      <Modal.Body className='bg-black'>

      </Modal.Body>
        <Modal.Footer className='bg-black border'>
        <iframe width="100%" height="300" src={video.Video_Url}
        title="ഉയർന്ന ശമ്പളത്തിൽ 𝒍𝑻 ജോലി   ആഗ്രഹിക്കുന്നുവോ?" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

        </iframe>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard