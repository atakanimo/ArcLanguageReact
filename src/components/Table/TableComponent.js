import React, { useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArcApi, searchArc } from '../../redux/action/apiActions';
import './Table.scss';
import { EditActiveArc, DeleteArc } from '../../redux/action/apiActions';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

export const TableComponent = (props) => {
  const dispatch = useDispatch();

  const isLogIn = useSelector((state) => state.isLogInReducer.isLogin);
  const searchedValue = useSelector(
    (state) => state.searchReducer.searchedValue
  );

  useEffect(() => {
    getDataFromApi();
  }, []);

  useEffect(() => {
    getSearchDataFromSearchApi(searchedValue.search);
  }, [searchedValue]);

  const getDataFromApi = () => {
    dispatch(fetchArcApi());
  };
  const getSearchDataFromSearchApi = (key) => {
    dispatch(searchArc(key));
  };

  const getData = useSelector((state) => state.apiReducers.getArc);
  const searchedValueFromDB = useSelector(
    (state) => state.apiReducers.searchedData
  );

  const onDelete = (e, data) => {
    e.preventDefault();
    alertify.confirm(
      'Are you sure to delete this record?',
      function () {
        dispatch(EditActiveArc(data))
          // dispatch(DeleteArc(id))
          .then((response) => {
            alertify.success('Deleted');
          });
      },
      function () {
        alertify.error('Canceled');
      }
    );
  };

  return (
    <div className="Table">
      {isLogIn == true ? (
        getData && getData.length > 0 ? (
          <Table size="sm" className="BootstrapTable" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>KEY NAME</th>
                <th>KEY VALUE</th>
                <th>KEY VALUE EN</th>
                <th>KEY VALUE RU</th>
                <th>KEY VALUE RO</th>
                <th>KEY VALUE TR</th>
                <th>KEY VALUE DE</th>
                <th>KEY COMMENT</th>
                <th>EDİT</th>
              </tr>
            </thead>
            {searchedValue.search == '' ? (
              getData.map(
                (
                  data, //data id
                  index
                ) => (
                  <tbody className="tbody">
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.keY_NAME}</td>
                      <td>{data.keY_VALUE}</td>
                      <td>{data.keY_VALUE_EN}</td>
                      <td>{data.keY_VALUE_RU}</td>
                      <td>{data.keY_VALUE_RO}</td>
                      <td>{data.keY_VALUE_TR}</td>
                      <td>{data.keY_VALUE_DE}</td>
                      <td>{data.keY_COMMENT}</td>
                      <td className="button">
                        <Button color="secondary">
                          <Link
                            className="link"
                            to={'/editarclan/arcId=' + data.id}
                          >
                            Update
                          </Link>
                        </Button>
                        <Button
                          onClick={(e) => onDelete(e, data)}
                          color="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                )
              ) //IF SEARCH INPUT ISN'T EMPTY
            ) : (
              <>
                {searchedValueFromDB.length > 0
                  ? searchedValueFromDB.map((item, index) => (
                      <tbody>
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.keY_NAME}</td>
                          <td>{item.keY_VALUE}</td>
                          <td>{item.keY_VALUE_EN}</td>
                          <td>{item.keY_VALUE_RU}</td>
                          <td>{item.keY_VALUE_RO}</td>
                          <td>{item.keY_VALUE_TR}</td>
                          <td>{item.keY_VALUE_DE}</td>
                          <td>{item.keY_COMMENT}</td>
                          <td className="button">
                            <Button color="secondary">
                              <Link
                                className="link"
                                to={'/editarclan/arcId=' + item.id}
                              >
                                Update
                              </Link>
                            </Button>
                            <Button
                              onClick={(e) => onDelete(e, item)}
                              color="danger"
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  : null}
              </>
            )}
          </Table>
        ) : (
          <div className="loadingScreen">
            <CircularProgress style={{width: "7rem", height: "7rem", color:"GrayText"}} />
          </div>
        )
      ) : (
        <div className="noLogin">
          <h3>
            <a href="/getname">Giriş Gerekli</a>
          </h3>
        </div>
      )}
    </div>
  );
};
