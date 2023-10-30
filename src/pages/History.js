import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Trash2 } from 'react-feather'
import { deleteHistory, getAllHistory } from '../services/allapis'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function History() {
  const [histories, setHistories] = useState([])
  const getHistory = async () => {
    const { data } = await getAllHistory()
    setHistories(data);


  }
  useEffect(() => {
    getHistory()
  }, [])
  // console.log(histories);
  const removeItem = async (id) => {
    await deleteHistory(id)
    getHistory()
  }


  return (
    <div>
      <h1 className='text-center p-5'><span>W</span>atch <span>H</span>istory</h1>
      <div className='text-end pe-5 pb-3'>
        <Link to={`/home`}>
          <Button className='btn btn-warning rounded'>Go back</Button>
        </Link>
      </div>
      {histories.length > 0 ? (
        <Table className='w-75 container pb-5 mb-5' striped bordered hover variant='danger'>
          <thead className='text-center fs-5'>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Video URL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              histories?.map((i, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{i?.date}</td>
                  <td>{i?.video_title}</td>
                  <td>{i?.url}</td>
                  <td className='text-center text-light'>
                    <Trash2 onClick={() => removeItem(i?.id)} size={50} className='btn text-light'></Trash2>

                  </td>
                </tr>
              ))
            }



          </tbody>
        </Table>) : <h1 className='text-center p-5'><span>N</span>o <span>W</span>atch <span>H</span>istory</h1>
      }
    </div>
  )
}

export default History