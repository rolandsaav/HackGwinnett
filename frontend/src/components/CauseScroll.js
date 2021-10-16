import React, {useState, useEffect} from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { db } from '../firebase';

export default function CauseScroll(props) {
    const [causes, setCauses] = useState([])

    useEffect(() => {
        getCauses();
    }, [])

    
    const getCauses = async () => {
        const response = db.collection("causes");
        const data = await response.get();
        data.docs.forEach(item => {
        setCauses(causes => [...causes, item.data()])
        })
    }
  

    return (
        <Container>
            <h1>Available Causes</h1>
            {
                causes && causes.map(cause => {
                    return(
                        
                        <Card className="mb-3">
                            <button onClick={() => {
                                props.update({name: cause.name, desc: cause.description})}
                            }>
                            <Card.Body>
                                <h1>{cause.name}</h1>
                                <h3>{cause.description}</h3>
                            </Card.Body>
                            </button>
                        </Card>
                        
                    )
                })
            }
        </Container>
    )
}
