import React from 'react';
import { useForm } from 'react-hook-form';


export const Login = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputsContainer">
        <input type="text" placeholder='login'{...register("login", { required: true })} />
        {errors.login && <span>This field is required</span>}
        <input type="text" placeholder='password'{...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        </div>
        <div>
        <label htmlFor="remmemberMe">remmemberMe</label>
          <input
            type="checkbox"
            {...register("remmemberMe")}
          />
        </div>
        <div>
          <button >Login</button>
        </div>
      </form>
    </>
  );
}

