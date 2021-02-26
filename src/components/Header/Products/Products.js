import React from 'react'
import { Card } from 'react-bootstrap'




function Products({data}) {
    return (
        <div>
            <Card style={{ width: '20rem', height: '45vh', borderRadius: "15px", marginTop: '2vh', padding: '7%'}}>   
  <Card.Img variant="top" src={data.img} style={{maxHeight: '25vh', padding: '0px 8%'}}/>
  <Card.Body>
    <Card.Title> <p>{data.dis}</p> </Card.Title>
    <Card.Text >
     <div className="mt-1">
     <h4>{data.c_price}</h4>
     <div className="d-flex justify-content-between">
     <h5 className="text-muted strike"><del>{data.p_price}</del></h5>
     <h6 className="text-muted">{data.discount}</h6>
     </div>
     </div>
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default Products
