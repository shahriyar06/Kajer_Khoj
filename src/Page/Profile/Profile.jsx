import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const { user, setUser } = useContext(AuthContext);
    const handleUserProfile = (e) => {
        // const form = new FormData(e.target);
        // const name = form.get("name");
        // const photo = form.get("photo");
        const form = e.target;
        const name = form.name;
        const photo = form.photo;
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo})
            })
            .catch()
    }

    return (
        <div>
            <Helmet>
                <title>Kajer Khoj | myprofile</title>
            </Helmet>
            <div className="w-9/12 mx-auto my-10">
                <div className="text-center items-center">
                    <div className="h-72 w-72 rounded-full border-2 border-gray-500 mb-6 mx-auto"><img src={user.photoURL} alt="" className="h-64 w-64 rounded-full mx-auto mt-3" /></div>
                    <div><h1 className="text-3xl font-semibold" >{user.displayName}</h1></div>
                </div>
                <form className="card-body" onSubmit={handleUserProfile}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder={user.email} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder={user.displayName} name="name" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder={user.photoURL} className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline text-[#947351] hover:text-[#FFFFFF] hover:bg-[#947351] hover:border-[#947351] lg:text-lg mr-5">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;