import React, { useEffect } from 'react';
import './GetName.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const GetName = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const name = watch('Name');
  let userName = localStorage.userName;

  useEffect(() => {
    if(userName == null) {
      console.log("username null")
    } else {
      dispatch({
        type: 'LOGIN_NAME',
        payload: {userName},
      });
      dispatch({
        type: 'IS_LOG_IN',
        payload: true,
      });
      props.history.push('/arclanguage');
    }
  }, []);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({
      type: 'LOGIN_NAME',
      payload: name,
    });
    dispatch({
      type: 'IS_LOG_IN',
      payload: true,
    });
    localStorage.setItem('userName', name);
    props.history.push('/arclanguage');
  };

  return (
    <div className="getNameComponenet">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Your Name"
          className="form-control"
          {...register('Name', {
            required: true,
            maxLength: 30,
            pattern: /^[A-Za-z\s]+$/i,
          })}
        />
        {errors?.Name?.type === 'required' && <p>This field is required</p>}
        {errors?.Name?.type === 'maxLength' && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.Name?.type === 'pattern' && (
          <p>Alphabetical characters only</p>
        )}
        <input className="sendButton " type="submit" />
      </form>
    </div>
  );
};
