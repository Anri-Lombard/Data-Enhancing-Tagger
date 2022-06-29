import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import {Card, Form, Button} from "react-bootstrap"


function LoginBox() {
    return (
        <Card className="login-card">
          <Card.Body>
            <Card.Title style={{textTransform: "uppercase"}}>Login with credentials</Card.Title>
            <hr></hr>
            <Form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="email@organisation.com"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="your_assigned_password"></Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group>
              <Button type="submit" variant='primary'>Enter</Button>
            </Form.Group>
            </Form>
          </Card.Body>
        </Card>
    );
}

export default LoginBox