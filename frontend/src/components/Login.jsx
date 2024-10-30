import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

  try {/*localhost:4001*/}
      const response = await axios.post("http://https://techlearn-1.onrender.com/user/login", userInfo);
      alert("Login successful");
      console.log(response.data);
      if(response.data){
        toast.success("Login successfull");setTimeout(()=>{
          document.getElementById("my_modal_3").close();
          window.location.reload(); 

        },3000)
        document.getElementById("my_modal_3").close();
        window.location.reload();
      }
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      console.error(err);
      alert("Error: " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
         
        <h3 className="font-bold text-lg">Login</h3>
        {/*<Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>*/}


        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => dialogRef.current.close()}>
          ✕
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div>
            <label htmlFor="email">Email</label><br />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <label htmlFor="password">Password</label><br />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
          <div className='flex justify-around mt-4'>
            <button
              type="submit"
              className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
              Login
            </button>
            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
