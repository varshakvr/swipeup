import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Import your CSS module
import ParticlesBg from "./ParticlesBg";
import {datacontext} from "../../App";
import dummyprofilepic from "../../assests/images/dummyprofilepic.png";
import dummycoverpic from "../../assests/images/dummycoverpic.jpg";
import loginvideo from "../../assests/images/login.mp4";
function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [errorLogin,setErrorLogin] = useState({email:false,password:false});
  const [errorSignin,setErrorSignin] = useState({username:false,email:false,password:false,confirmpassword:false});
  const [logininfo, setLoginInfo] = useState({email:"",password:""});
  const [signupinfo, setSignupInfo] = useState({username:"",email:"",password:"",confirmpassword:""});
  const {userData,setUserData,user,setUser} = useContext(datacontext)

  const handleLogin = (e) => {
    e.preventDefault();

    const currentUser = userData.find((user) => user.email === logininfo.email);

    if (currentUser) {
      setErrorLogin({ ...errorLogin, email: false, password: false });
      if (currentUser.password === logininfo.password) {
        setUser(currentUser);
        navigate('/');
      } else {
        setErrorLogin({...errorLogin,email:false,password:true});
      }
    } else {
      setErrorLogin({ ...errorLogin, email: true, password: false }); 
    }
  };

  {/* Signup Logic */}
  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_.]+$/;
    return username.length >= 3 && usernameRegex.test(username);
  }
  
  function validateEmail(email, userData) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email) && !userData.some((user) => user.email === email);
  }
  
  function validatePassword(password) {
    return password.length >= 6 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
  }
  
  function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
  }

  const handleSignup = (e) => {
    e.preventDefault();

    const isValidUsername = validateUsername(signupinfo.username);
    const isValidEmail = validateEmail(signupinfo.email, userData);
    const isValidPassword = validatePassword(signupinfo.password);
    const isValidConfirmPassword = validateConfirmPassword(
      signupinfo.password,
      signupinfo.confirmpassword
    );

    setErrorSignin({
      username: !isValidUsername,
      email: !isValidEmail,
      password: !isValidPassword,
      confirmpassword: !isValidConfirmPassword,
    });

    if (isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword) {
      // Create a new user object and add it to the userData array
      const newUser = {
        username: signupinfo.username,
        email: signupinfo.email,
        password: signupinfo.password,
        profilepic:dummyprofilepic,
        coverpic:dummycoverpic,
        profilemusic:""
      };

      setUserData([...userData, newUser]);
      setUser(newUser);

      // Redirect to the homepage after successful signup
      navigate('/');
    }
  };

  return (
    <>
      <div className={styles.app}>
      <ParticlesBg/>
        <section className={styles.container}>
          <div className={styles.containerInner}>
            {login ? (
              <div className={styles.loginContainer}>
                <h2 className={styles.title}>Login</h2>
                <p className={styles.subtitle}>If you are already a member, easily log in</p>

                <form action='' className={styles.form}>
                  <input
                    className={styles.input}
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={logininfo.email}
                    onChange={(e) => setLoginInfo({...logininfo,email:e.target.value})}
                  />
                  {errorLogin.email && <p className={styles.error}>You are a New User. Create an Account.</p>}
                    <input
                      className={styles.input}
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={logininfo.password}
                      onChange={(e) => setLoginInfo({...logininfo,password:e.target.value})}
                    />
                    {errorLogin.password && <p className={styles.error}>Incorrect Password</p>}
                  <button className={styles.loginButton} onClick={handleLogin}>Login</button>
                </form>

                <div className={styles.separator}>
                  <hr />
                  <p className={styles.separatorText}>OR</p>
                  <hr />
                </div>

                <div className={styles.createAccount}>
                  <p>Don't have an account?</p>
                  <button
                    className={styles.registerButton}
                    onClick={() => setLogin(false)}
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.loginContainer}>
                <h2 className={styles.title}>Sign Up</h2>
                <p className={styles.subtitle}>If you are a new member, Create an account</p>

                <form action='' className={styles.form}>
                    <input
                        className={styles.input}
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={signupinfo.username}
                        onChange={(e) => setSignupInfo({...signupinfo,username:e.target.value})}
                    />
                    {errorSignin.username && <p className={styles.error}>Username must be at least 3 characters and contain only letters, numbers, underscores, and dots.</p>}
                    
                  <input
                    className={styles.input}
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={signupinfo.email}
                        onChange={(e) => setSignupInfo({...signupinfo,email:e.target.value})}
                    />
                    {errorSignin.email &&<p className={styles.error}>Invalid email or email already exists.</p>}
                    <input
                      className={styles.input}
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={signupinfo.password}
                      onChange={(e) => setSignupInfo({...signupinfo,password:e.target.value})}
                    />
                    {errorSignin.password && <p className={styles.error}>Password must be at least 6 characters long and contain at least one letter and one number.</p>}
                    <input
                      className={styles.input}
                      type='password'
                      name='confirmpassword'
                      placeholder='Confirm Password'
                      value={signupinfo.confirmpassword}
                        onChange={(e) => setSignupInfo({...signupinfo,confirmpassword:e.target.value})}
                    />
                    {errorSignin.confirmpassword && <p className={styles.error}>Passwords do not match.</p>}
                  <button className={styles.loginButton} onClick={handleSignup}>Sign Up</button>
                </form>

                <div className={styles.separator}>
                  <hr />
                  <p className={styles.separatorText}>OR</p>
                  <hr />
                </div>

                <div className={styles.createAccount}>
                  <p>Already have an account?</p>
                  <button
                    className={styles.registerButton}
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            <div className={styles.imageContainer}>
              <video
                className={styles.roundedImage}
                src={loginvideo}
                alt='Background'
                autoPlay
                muted
                loop
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
