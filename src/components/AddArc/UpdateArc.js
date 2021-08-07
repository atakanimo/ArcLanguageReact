import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertify from "alertifyjs";
import TextInput from "../Toolbax/TextInput";
import { EditArc } from "../../redux/action/apiActions";
import { Col, Container, Row } from "reactstrap";
import "./AddArc.scss";

export const UpdateArc = (props) => {
  const dispatch = useDispatch();
  const arcId = props.match.params.arcId;  //GET ID FROM PARAMS
  const [updatedArc, setUpdateArc] = useState({});
  console.log("updateConsole" + JSON.stringify(updatedArc));
  
  const allData = useSelector((state) => state.apiReducers.getArc); //ALL DATA FROM REDUX
  const userName = localStorage.userName;

  useEffect(() => {
    var itemData = allData.filter((allData) => allData.id == arcId)[0]; //GET FİLTERED DATA
    setUpdateArc(itemData);
  }, []);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    if (updatedArc.keY_NAME && updatedArc.keY_VALUE) {   
      dispatch(EditArc(updatedArc,arcId)).then(response => {
        // dispatch(NewArc(addedArc))
        alertify.success("Güncellendi");
        props.history.push('/arclanguage');
      });      
    } else {
      alertify.error("Boş Alanları Doldurun");
      alertify.error("Key Name, Key Value Dolu Olmalıdır!");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updatedArc.updaterUser = userName;
    updatedArc[name] = value;
    setUpdateArc({ ...updatedArc });
  };
  return (
    <div className="allFormClass">
      <form className="formClass" onSubmit={handleSubmitUpdate}>
        <Container className="container">
          <Row>
            <Col className="col-md-6" xs="6">
              <TextInput
                name="keY_NAME"
                label="Key Name"
                value={updatedArc.keY_NAME}
                // onChange={handleInputChange}
              />

              <TextInput
                name="keY_VALUE"
                label="Key Value"
                value={updatedArc.keY_VALUE}
                onChange={handleInputChange}
              />

              <TextInput
                name="keY_COMMENT"
                label="Key Comment"
                value={updatedArc.keY_COMMENT}
                onChange={handleInputChange}
              />
              <TextInput
                name="keY_VALUE_EN"
                label="Key Value EN"
                value={updatedArc.keY_VALUE_EN}
                onChange={handleInputChange}
              />
            </Col>
            <Col className="col-md-6" xs="6">
              <TextInput
                name="keY_VALUE_RU"
                label="Key Value RU"
                value={updatedArc.keY_VALUE_RU}
                onChange={handleInputChange}
              />
              <TextInput
                name="keY_VALUE_RO"
                label="Key Value RO"
                value={updatedArc.keY_VALUE_RO}
                onChange={handleInputChange}
              />
              <TextInput
                name="keY_VALUE_TR"
                label="Key Value TR"
                value={updatedArc.keY_VALUE_TR}
                onChange={handleInputChange}
              />

              <TextInput
                name="keY_VALUE_DE"
                label="Key Value DE"
                value={updatedArc.keY_VALUE_DE}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-success">
                UPDATE
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};
