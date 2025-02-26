import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { easeIn, motion } from "motion/react";
const ContactComponent = () => {
  const initialFormData = {
    fullname: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if ([formData.name, formData.email, formData.message].includes("")) {
      window.alert("Please enter all details");
    } else {
      setFormData(initialFormData);
      console.log(formData);
      window.alert("Form submitted successfully");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: easeIn } }}
    >
      <Container className="mt-2">
        <h1 className="pt-3">Contact</h1>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              name="fullname"
              value={formData.fullname}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              size="lg"
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};

export default ContactComponent;
