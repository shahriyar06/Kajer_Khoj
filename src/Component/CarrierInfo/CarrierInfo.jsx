

const CarrierInfo = () => {
    return (
        <div className="my-6 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/VQnVRQH/campaign-creators-g-Msn-Xq-ILjp4-unsplash.jpg')" }}>
            <div className='bg-black bg-opacity-50 py-12'>
                <div className=" text-center">
                    <h1 className="text-5xl font-bold mb-6 text-white">Carrier Guiline</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-3 text-white">
                    <div className="md:w-80 w-72 lg:w-96  shadow-2xl glass">
                        <div className="card-body text-lg text-white">
                            <h2 className="card-title text-2xl text-accent">Software Engineer</h2>
                            <p>Design, develop, and test software applications. Solve complex problems and collaborate with teams to create innovative solutions.</p>
                            <h2><span className="font-medium text-accent">Skills : </span>Programming languages, Problem-solving, Team collaboration, Software architecture</h2>
                            <h2><span className="font-medium text-accent">Market Demand : </span>High demand due to rapid technological advancements and digital transformation across industries.</h2>
                        </div>
                    </div>
                    <div className="md:w-80 w-72  lg:w-96 shadow-2xl glass">
                        <div className="card-body text-lg">
                            <h2 className="card-title text-2xl text-accent">Mobile App Developer</h2>
                            <p>Design and develop innovative mobile applications for Android and iOS platforms. Utilize programming languages and frameworks to create user-friendly interfaces.</p>
                            <h2><span className="font-medium text-accent">Skills : </span>Java/Kotlin (Android), Swift/Objective-C (iOS), React Native/Flutter, UI/UX Design</h2>
                            <h2><span className="font-medium text-accent">Market Demand : </span>High demand due to the increasing use of smartphones and tablets, creating opportunities in various industries.</h2>
                        </div>
                    </div>
                    <div className="md:w-80 w-72  lg:w-96 shadow-2xl glass">
                        <div className="card-body text-lg">
                            <h2 className="card-title text-2xl text-accent">Cybersecurity Analyst</h2>
                            <p>Protect organizational data, systems, and networks from cyber threats. Analyze security breaches, implement preventive measures, and ensure compliance with regulations.</p>
                            <h2><span className="font-medium text-accent">Skills : </span>Cybersecurity Tools, Network Security, Incident Response, Risk Assessment</h2>
                            <h2><span className="font-medium text-accent">Market Demand : </span>High demand as cybersecurity threats continue to rise, especially in sectors dealing with sensitive data like finance and healthcare.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarrierInfo;