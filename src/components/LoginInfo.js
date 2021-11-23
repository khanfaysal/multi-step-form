import React from 'react';

const LoginInfo = ({formData, setFormData}) => {
    return (
        <div className="login-info-container">
        <input
            type="text"
            placeholder="Password..."
            value={formData.password}
            onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
            }
        />
        <input
            type="text"
            placeholder="Confirm Password..."
            value={formData.confirmPassword}
            onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
            }
        />
      </div>
    );
};

export default LoginInfo;