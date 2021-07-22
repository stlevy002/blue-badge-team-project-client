import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ReviewEdit = (props) => {
    const [editReview, setEditReview] = useState(props.reviewToUpdate.review);

    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`http://localhost:5000/${props.reviewToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {review: editReview}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchReviews();
            props.updateOff()
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Write A Review!</ModalHeader>
            <ModalBody>
                <Form onSubmit={reviewUpdate}></Form>
                <Form>
                    <FormGroup>
                        <Label htmlFor="review">Edit Review:</Label>
                        <Input name="review" value={editReview} onChange={(e) => setEditReview(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update the Review!</Button>
                </Form>
            </ModalBody>
        </Modal>   
    )
}

export default ReviewEdit;