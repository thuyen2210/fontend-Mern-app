import {  Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import ActionButton from './ActionButton';



const SinglePost = ({post: {_id, status,title, description, url}}) => {
    return (
        <Card className='shadow' border={status ==='LEARNED'? 'success' : status==='LEARNING' ?'warning' : 'danger' }>
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                        <p className='post-title'>{title}</p>
                        
                        <Badge pill className={status === 'LEARNED'? 'bg-success' : status === 'LEARNING' ? 'bg-warning' :'bg-danger' }>
                            {status}
                        </Badge>
                        </Col>

                        <Col className='text-right'>
                            <ActionButton url={url} _id={_id}/>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default SinglePost;