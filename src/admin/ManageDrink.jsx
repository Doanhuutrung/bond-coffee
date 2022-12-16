import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom/useGetData';
import {db} from '../firebase/firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import {toast} from 'react-toastify'



const ManageDrink = () => {
  const {data:productsData, loading} = useGetData('drinks'); 
  const deleteDrink = async(id) => {
    await deleteDoc(doc(db,'drinks', id));
    toast.success('Deleted !!!');
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  loading ? (<h4 className='py-5 text-center fw-bold'> Loading..... </h4>) :
                  (productsData.map(item => (
                      <tr key={item.id}>
                      <td> <img src={item.imgURL} alt="" /></td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td><button onClick={() => {deleteDrink(item.id)}} className='btn btn-danger'> Delete </button></td>
                    </tr>
                    )))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ManageDrink




