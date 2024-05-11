

const Blogs = () => {
    return (
        <div className="w-11/12 mx-auto mt-3">
            <div className="flex gap-7 items-center mb-8">
                <div className="text-lg">
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Access Token :</h1>
                        <p className="mb-6">An access token is a credential used to access protected resources on behalf of a user. It is typically short-lived, lasting anywhere from a few minutes to several hours.When a user logs in or authorizes an application, they are issued an access token. This token is sent with each request to access protected resources.Access tokens contain information such as the user is identity and permissions, allowing the server to make authorization decisions based on this information.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Refresh Token :</h1>
                        <p className="">A refresh token is a credential used to obtain a new access token once the current access token expires. It has a longer lifespan compared to access tokens and is typically used to request new access tokens without requiring the user to log in again.When an access token expires, the client can use the refresh token to request a new access token from the authentication server.Refresh tokens are securely stored on the client side and should be kept confidential, as they grant the ability to obtain new access tokens.</p>
                    </div>
                </div>
                <div className="rounded-full flex-grow">
                    <img src="https://i.ibb.co/GCHgf6f/token-image.jpg" className="rounded-3xl" alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mb-5">They work and where should we store them on the client side</h1>
            </div>
            <div className="flex flex-row-reverse gap-6 items-center mb-9">
                <div className="text-lg w-7/12">
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Access Token :</h1>
                        <p className="mb-6">These are typically stored in memory or in a secure storage mechanism such as browser cookies or HTML5 Web Storage (localStorage or sessionStorage). Storing them securely is important to prevent unauthorized access.</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Refresh Token :</h1>
                        <p className="">These should be stored securely, preferably in a location with limited access such as HTTP-only cookies or secure browser storage. Storing refresh tokens in localStorage is generally discouraged due to potential security risks associated with cross-site scripting (XSS) attacks.</p>
                    </div>
                </div>
                <div className="rounded-full flex-grow w-5/12">
                    <img src="https://i.ibb.co/HTfgvwt/token.png" className="rounded-3xl" alt="" />
                </div>
            </div>
            <div className="flex gap-7 items-center mb-8">
                <div className="text-lg">
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Express JS :</h1>
                        <p className="mb-6">
                            Express.js is a minimalist web application framework for Node.js, offering a robust set of features for building web servers and APIs. It is lightweight and unopinionated, giving developers flexibility and control over their applications architecture and design choices. With middleware functions at its core, Express.js allows developers to handle tasks such as logging, authentication, and error handling efficiently. It provides a simple and intuitive API for defining routes and handling HTTP requests, along with support for integrating various template engines for dynamically generating HTML content. Express.js has a large and active community of developers, along with a vast ecosystem of middleware and extensions, making it a popular choice for building web applications and APIs in the Node.js ecosystem.</p>
                    </div>
                </div>
                <div className="rounded-full flex-grow">
                    <img src="https://i.ibb.co/hf3KcVB/images.jpg" className="rounded-3xl" alt="" />
                </div>
            </div>
            <div className="flex gap-7 flex-row-reverse items-center mb-8">
                <div className="text-lg w-1/2">
                    <div>
                        <h1 className="text-3xl font-semibold mb-4">Express JS :</h1>
                        <p className="mb-6">
                            NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is heavily inspired by Angular and uses TypeScript as its primary language. NestJS promotes a structured and modular approach to building applications, with concepts like controllers, services, modules, and decorators for organizing code in a scalable and maintainable way. It provides built-in support for features like dependency injection, middleware, guards, and modern technologies like GraphQL and WebSockets. With strong typing and enhanced tooling support provided by TypeScript, NestJS offers improved developer productivity and code quality. It has a growing community of developers and comprehensive documentation covering everything from getting started to advanced topics like testing and deployment.</p>
                    </div>
                </div>
                <div className="rounded-full flex-grow w-1/2">
                    <img src="https://i.ibb.co/85MbcTG/images1.jpg" className="rounded-3xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;