import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password)
        createNewUser(email, password)
            .then(result => {
                const newUser = result.user;
                setUser(newUser);
                navigate('/')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorCode, errorMessage)
            })
        form.reset()
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
            <h2 className="text-4xl font-bold text-center py-6 border-b-2">Register</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <label className="label">
                            <p>Already have an account ? Please <Link to="/login" className="text-red-400">Login</Link></p>
                        </label>
                </form>
            </div>
        </div>
    );
};

export default Register;