import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
// import { Helmet } from "react-helmet-async";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
// import ParticlesBackground from "../Particles/ParticlesBackground";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../Firebase/firebase.config";
import ParticlesBackground from "../Particles/ParticlesBackground";
import { Helmet } from "react-helmet";
import Lottileone from "../Lottieone/Lottileone";
const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const naviGate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                toast.success('Logged in with Google successfully!');
                naviGate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            });
    };
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                const loggedInUser = result.user;
                setUser(loggedInUser);
                toast.success('Logged in with Google successfully!');
                naviGate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Failed to login with Google.');
            });
    };
    
    const gitSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                toast.success('Logged in with GitHub successfully!');
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Failed to login with GitHub.');
            });
    };

    return (
        <div className="text-3xl my-10 text-center rounded-2xl lbg ">
            <ParticlesBackground></ParticlesBackground>
            <div className="w-full">
            <Lottileone></Lottileone>
            </div>
            
            <Helmet>
                <title>Login || Tourism</title>
            </Helmet>
            <div className="w-3/4 text-center m-auto p-20">
                <form onSubmit={handleLogin} className="md-3/4 lg:w-1/2 mx-auto bg-slate-500 p-12 rounded-2xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control flex relative">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label absolute right-0 top-[60px] transform -translate-y-1/2 cursor-pointer">
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>
                                }
                            </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <p className="text-base mt-2">Create New Account? <Link to='/register'><span className="text-blue-900 font-bold">Register</span></Link></p>
                        <p className="text-base mt-2">Want to update? <Link to='/Update'><span className="text-blue-900 font-bold">Update Profile</span></Link></p>
                    </div>
                    <div className="flex  gap-5  m-auto">
                        <button onClick={googleSignIn} className="btn mt-5 rounded-full"><FcGoogle size={32} /></button>
                        <button onClick={gitSignIn} className="btn mt-5 rounded-full"><FaGithub size={32} /></button>
                    </div>
                </form>
               <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;