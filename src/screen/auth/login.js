import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Login = (props) => {
    return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
      </Container>
    );
  }
  
  export default Login;