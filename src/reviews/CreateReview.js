import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ReviewCreate = (props) => {
    const [review, setReview] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/create/', {
            method: 'POST',
            body: JSON.stringify({log: {review: review}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((reviewData) => {
                console.log(reviewData);
                setReview('')
                props.fetchReviews();
            })
    }

    return(
    <>
       <h3>Review A Movie!</h3>
       <Form onSubmit={handleSubmit}></Form>
       <Form>
           <FormGroup>
               <Label htmlFor="review"/>
               <Input name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
            </FormGroup>
           <Button type="submit">Click to Submit</Button>
       </Form>
    </>   
    )
}

export default ReviewCreate;