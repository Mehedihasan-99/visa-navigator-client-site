import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {

    const { login, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user
                setUser(user);
                navigate(location?.state ? location.state : '/');
                console.log(user)
            })
            .catch(error => {
                alert(error.message)
                console.log("Error", error)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                <h2 className="text-4xl font-bold text-center py-6 border-b-2">Login</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt link link-hover">Forgot password?</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <label className="label">
                        <p>You are not registered already? Please <Link to="/register" className="text-red-400">Register</Link> first</p>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Login;