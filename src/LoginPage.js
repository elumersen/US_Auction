import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit login credentials to a server
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 bg-light">
        <h1 className="text-center mb-4">Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor='email' className="form-label">Email:</label>
            <input type='email' id='email' value={email} onChange={handleEmailChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label">Password:</label>
            <input type='password' id='password' value={password} onChange={handlePasswordChange} required className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type='checkbox' id='rememberMe' checked={rememberMe} onChange={handleRememberMeChange} className="form-check-input" />
            <label htmlFor='rememberMe' className="form-check-label">Remember me?</label>
          </div>
          <div className="mb-3 text-center">
            <button type='submit' className="btn btn-primary">Log in</button>
          </div>
        </form>
        <p className="text-center">Use a local account to log in.</p>
        <p className="text-center">Don't have an account? <a href='/register'>Register as a new user</a></p>
        <p className="text-center"><a href='/forgot-password'>Forgot your password?</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
