//! PROFILE SCREEN:
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  // GET USER DETAILS FROM STATE:
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  // GET USER LOGIN FROM STATE:
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  // GET UPDATED USER PROFILE FROM STATE:
  const userUpdateProfile = useSelector(state => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const onSubmitHandler = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      //!  DISPATCH UPDATE PROFILE
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2 style={{ textAlign: 'center' }}> User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={onSubmitHandler}>
          {/* NAME FIELD */}
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>

          {/* EMAIL FIELD */}
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* PASSWORD FIELD */}
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* CONFIRM PASSWORD FIELD */}
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type='submit' variant='outline-info' className='btn-block'>
            Update
          </Button>
        </Form>
      </Col>
      <Col id='orders' md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
