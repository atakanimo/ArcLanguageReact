import React, { useEffect, useState } from 'react';
import TextInput from '../Toolbax/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import './AddArc.scss';
import { NewArc } from '../../redux/action/apiActions';
import alertify from 'alertifyjs';
import { anyError } from '../../redux/action/errorHandlingAction';

export const AddNewArc = (props) => {
  const dispatch = useDispatch();
  const [addedArc, setAddedArc] = useState([]);

  const isLogIn = useSelector((state) => state.isLogInReducer.isLogin);
  const userName = localStorage.userName
  const errorHandling = useSelector(
    (state) => state.errorHandlingReducer.ErrorNewArc
  );

  function handleAddChange(event) {
    debugger;
    const { name, value } = event.target;
    addedArc.createUser = userName;
    addedArc[name] = value;
    setAddedArc({ ...addedArc });
    console.log('addedarc' + JSON.stringify(addedArc));
    console.log(userName);
  }

  useEffect(() => {
    if (errorHandling && errorHandling.length > 0) {
      alertify.error(errorHandling);
    } else {
      if (addedArc && Object.keys(addedArc).length > 0) {
        alertify.success('Başarılı');
        props.history.push('/arclanguage');
      } else {
        console.log('null');
      }
    }
  }, [errorHandling]);

  const handleSubmitSave = (e) => {
    e.preventDefault();
    addedArc.keY_NAME && addedArc.keY_VALUE
      ? dispatch(NewArc(addedArc)).then((response) => {
          console.log(response);
        })
      : alertify.error('Key Name ve Key Value Boş Bırakılamaz');
  };

  return (
    <div className="allFormClass">
      {isLogIn == true ? (
        <form className="formClass" onSubmit={handleSubmitSave}>
          <Container className="container">
            <Row>
              <Col className="col-md-6" xs="6">
                <TextInput
                  name="keY_NAME"
                  label="Key Name"
                  onChange={handleAddChange}
                />
                <TextInput
                  name="keY_VALUE"
                  label="Key Value"
                  onChange={handleAddChange}
                />

                <TextInput
                  name="keY_COMMENT"
                  label="Key Comment"
                  onChange={handleAddChange}
                />
                <TextInput
                  name="keY_VALUE_EN"
                  label="Key Value EN"
                  onChange={handleAddChange}
                />
              </Col>
              <Col className="col-md-6" xs="6">
                <TextInput
                  name="keY_VALUE_RU"
                  label="Key Value RU"
                  onChange={handleAddChange}
                />
                <TextInput
                  name="keY_VALUE_RO"
                  label="Key Value RO"
                  onChange={handleAddChange}
                />
                <TextInput
                  name="keY_VALUE_TR"
                  label="Key Value TR"
                  onChange={handleAddChange}
                />

                <TextInput
                  name="keY_VALUE_DE"
                  label="Key Value DE"
                  onChange={handleAddChange}
                />
                <button type="submit" className="btn btn-success">
                  KAYDET
                </button>
              </Col>
            </Row>
          </Container>
        </form>
      ) : (
        <div className="noLogin">
          <h3>
            <a href="/getname">Giriş Yapılmalı</a>
          </h3>
        </div>
      )}
    </div>
  );
};
