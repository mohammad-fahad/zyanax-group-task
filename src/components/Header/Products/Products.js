import React from 'react'
import { Card } from 'react-bootstrap'




function Products({data}) {
    return (
        <div className="my-1 justify-content-center">
            <Card style={{ width: '20rem', height: '92%', borderRadius: "15px", padding: '7%', overFlow: 'hidden'}}>   
              <Card.Img variant="top" src={data.img} style={{maxHeight: '25vh', padding: '0px 8%'}}/>
              <Card.Body>
                <Card.Text style={{fontSize: '1.2rem'}}>{data.dis} </Card.Text>
                <Card.Text >
                {/* <div className="mt-1"> */}
                <h4>{data.c_price}</h4>
                <div className="d-flex justify-content-between">
                <h5 className="text-muted strike"><del>{data.p_price}</del></h5>
                <h6 className="text-muted">{data.discount}</h6>
                </div>
                {/* </div> */}
                </Card.Text>
                
              </Card.Body>
            </Card>
        </div>
    )
}

export default Products
