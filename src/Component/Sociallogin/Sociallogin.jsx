// import { FcGoogle } from "react-icons/fc";
// import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";

const Sociallogin = () => {
    return (
        <div>
            <div className="flex gap-6 items-center justify-center">
                {/* <button onClick={() => handlesociallogin(googlelogin)} className="bg-transparent text-lg"><FcGoogle className="text-2xl" /></button>
                <button onClick={() => handlesociallogin(githublogin)} className="bg-transparent text-lg my-3"><ImGithub className="text-2xl" /></button> */}
                <button className="bg-transparent text-lg"><FaFacebook className="text-2xl text-[#2563eb]" /></button>
            </div>
        </div>
    );
};

export default Sociallogin;