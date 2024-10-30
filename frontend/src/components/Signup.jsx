import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname ||"/";
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname, // Change from Fullname to fullname
            email: data.email,
            password: data.password,
        };

        try {{/*localhost:4001*/}
            const response = await axios.post("http://https://techlearn-1.onrender.com/user/signup", userInfo);
            alert("Signup successful");
            console.log(response.data);
            if(response.data)
                {
                    toast.success("signup succesfull");
                    
                    navigate(from,{replace:true});
                }
        } catch (err) {
            console.error(err);
            alert("Error: " + (err.response?.data?.message || "Signup failed"));
        }
    };

    return (
        <div className='flex h-screen items-center justify-center py-2'>
            <div className="w-[600px]">
             
                <div className="border-[2px] shadow-md p-5 rounded-md modal-box">

                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Fullname</label>
                            <input
                                {...register("fullname", { required: true })} // Use fullname here
                                type='text'
                                placeholder='Enter your fullname'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            {errors.fullname && <span>This field is required</span>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                {...register("password", { required: true })}
                                type='password'
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                            />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button
                                type="submit"
                                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Signup
                            </button>
                            <p>
                                Have an account?




                                <Link to="/" className='underline text-blue-500 cursor-pointer'>
                                    Login
                                </Link> 
                          {/*<Link  to="/login" className='underline text-blue-500 cursor-pointer'>  <button
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById('my_modal_3').showModal()}>
                                    Login
                                </button> </Link> */}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
