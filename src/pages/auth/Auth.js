import React , {useState} from 'react'
import Styles from "./auth.module.css";
import Authimg from "../../assests/images/p3.jpg";

function Auth() {

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [auth,setAuth] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required.';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const uniqueId = Math.random().toString(36).substr(2, 9);

    const newUser = {
      id: uniqueId,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    setUsers([...users, newUser]);
    console.log(users)

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setAuth(true);
  };

  return (
    <div className={Styles.auth}>
      <div className={Styles.container}>
        <div className={Styles.form}>
          <h2 className={Styles.title}>Login</h2>
          <form className={Styles.formdiv} onSubmit={handleSubmit}>

          <div>
          <label>Username:</label>
          <input
            className={Styles.input}
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            className={Styles.input}
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            className={Styles.input}
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            className={Styles.input}
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button className={Styles.button} type="submit">Register</button>
          </form>
        </div>
        <div className={Styles.image}>
          <img src={Authimg} />
        </div>
      </div>
    </div>
  )
}

export default Auth