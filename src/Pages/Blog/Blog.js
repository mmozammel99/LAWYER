import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    const {dark}= useContext(AuthContext)
    useTitle('Blog')
    return (
        <div className= {`w-full pb-10 ${dark?"bg-base-100":"bg-gray-100" }`}>
            <div className='text-neutral-content flex text-3xl lg:text-5xl font-bold justify-center gap-5 py-10'>
                -
                <h2 > BLOGS</h2>
                -
            </div>

            <article className={`max-w-7xl px-6 my-10 lg:px-16 py-24 mx-auto space-y-16  shadow-md ${dark ? "bg-base-200  " : "bg-primary"} ${!dark?"text-base-100":"text-gray-100" }`}>
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-none">SQL vs NoSQL: Five Main Differences</h1>
                    <div className={`flex flex-wrap space-x-2 text-sm ${!dark?"text-base-100":"text-gray-100" }`}>
                        <Link className="p-1 hover:underline">#SQL</Link>
                        <Link className="p-1 hover:underline">#NoSQL</Link>
                        <Link className="p-1 hover:underline">#MongoDB</Link>
                    </div>
                    <p className={`text-sm ${!dark?"text-base-100":"text-gray-100" }`}>by
                        <Link to="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-600">
                            <span> MOZAMMEL </span>
                        </Link> on
                        <time datetime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
                    </p>
                </div>
                <div className={` text-justify ${!dark?"text-base-100":"text-gray-100" }`}>

                    <p>There are five practical differences between SQL and NoSQL:
                        <ol>
                            <li>Language</li>
                            <li> Scalability</li>
                            <li>  Structure</li>
                            <li>  Properties</li>
                            <li> Support and communities</li>
                        </ol>
                        <br />
                        1. Language
                        <br />
                        SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                        <br />
                        The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
                        <br />
                        Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
                        <br />
                        2. Scalability
                        <br />
                        Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:
                        <br />
                        SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                        NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                        Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
                        <br />
                        3. Structure
                        <br />
                        SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
                        <br />
                        NoSQL databases need not stick to this format, but generally fit into one of four broad categories:
                        <br />
                        Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.
                        Key-Value stores are dictionaries which access diverse objects with a key unique to each.
                        Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.
                        Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.
                        <br />
                        4. Properties
                        <br />
                        At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:
                        <br />
                        Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
                        Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
                        <br />
                        Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
                        Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
                        <br />
                        NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:
                        <br />
                        Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)
                        <br />
                        Availability: Every request has a non-error result, regardless of how recent that result is.
                        <br />
                        Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.
                        <br />
                        5. Support and communities
                        <br />
                        SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.
                        <br />
                        NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.
                        <br />
                        SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.</p>
                </div>

            </article>

            <article className={`max-w-7xl px-6 my-10 lg:px-16 py-24 mx-auto space-y-16  shadow-md ${dark ? "bg-base-200  " : "bg-primary"} ${!dark?"text-base-100":"text-gray-100" }`}>
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-none">What Is JWT? How Does It Work? </h1>
                    <div className={`flex flex-wrap space-x-2 text-sm ${!dark?"text-base-100":"text-gray-100" }`}>
                        <Link className="p-1 hover:underline">#JWT</Link>
                        <Link className="p-1 hover:underline">#token</Link>
                        <Link className="p-1 hover:underline">#MongoDB</Link>
                    </div>
                    <p className={`text-sm ${!dark?"text-base-100":"text-gray-100" }`}>by
                        <Link to="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-600">
                            <span> MOZAMMEL </span>
                        </Link> on
                        <time datetime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
                    </p>
                </div>
                <div className={` text-justify ${!dark?"text-base-100":"text-gray-100" }`}>

                    <p>What Is JWT?
                        <br />
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br />
                        What Is JSON?
                        <br />
                        For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                        <br />
                        What Are Tokens?
                        <br />
                        Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves.
                        <br />

                        How JWT Works
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br />
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        <br />
                        Once decoded, you will get two JSON strings:
                        <br />
                        The header and the payload. <br />
                        The signature. <br />
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                        <br />
                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                        <br />
                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                        <br />
                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        <br />
                        JWT Example: OAuth Bearer Tokens <br />
                        A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.
                        <br />
                        In simpler terms, you can think of a JWT bearer token as an identity badge to get into a secured building. The badge comes with special permissions (the claims); that is, it may grant access to only select areas of the building. The authorization server in this analogy is the reception desk — or the issuer of the badge. And to verify that the badge is valid, the company logo is printed on it, similar to the signature of the JWT. If the badge holder attempts to access a restricted area, the permissions on the badge determine whether or not they can access the area, similar to the claims in a JWT.
                        <br />
                        Why Use JWT? <br />
                        In short, JWTs are used as a secure way to authenticate users and share information.
                        <br />
                        Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                        <br />
                        Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.
                        <br />
                        Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same.
                    </p>
                </div>

            </article>

            <article className={`max-w-7xl px-6 my-10 lg:px-16 py-24 mx-auto space-y-16  shadow-md ${dark ? "bg-base-200  " : "bg-primary"} ${!dark?"text-base-100":"text-gray-100" }`}>
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-none">Difference between Node.JS and Javascript </h1>
                    <div className={`flex flex-wrap space-x-2 text-sm ${!dark?"text-base-100":"text-gray-100" }`}>
                        <Link className="p-1 hover:underline">#Node.JS</Link>
                        <Link className="p-1 hover:underline">#Javascript</Link>
                        <Link className="p-1 hover:underline">#c</Link>
                    </div>
                    <p className={`text-sm ${!dark?"text-base-100":"text-gray-100" }`}>by
                        <Link to="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-600">
                            <span> MOZAMMEL </span>
                        </Link> on
                        <time datetime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
                    </p>
                </div>
                <div className={` text-justify ${!dark?"text-base-100":"text-gray-100" }`}>

                    1. NodeJS :
                    <br />
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    <br />
                    2. JavaScript :   <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    <br />
                    Difference between Nodejs and JavaScript :
                    <br />
                    <div className="overflow-x-auto w-full">
                        <table className="table text-gray-100 table-zebra  lg:w-full">

                            <thead>
                                <tr>
                                    <th >S.No</th>
                                    <th >Javascript</th>
                                    <th>NodeJS</th>

                                </tr>
                            </thead>
                            <tbody className="">

                                <tr>
                                    <th>1</th>
                                    <td>Javascript is a programming language that is used for writing scripts <br /> on the website. </td>
                                    <td>NodeJS is a Javascript runtime environment.</td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Javascript can only be run in the browsers.</td>
                                    <td>We can run Javascript outside the browser with the help of NodeJS.</td>

                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>It is basically used on the client-side.</td>
                                    <td>It is mostly used on the server-side.</td>

                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>

                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Javascript can run in any browser engine as like JS core in safari and <br /> Spidermonkey in Firefox. </td>
                                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>

                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Javascript is used in frontend development.</td>
                                    <td>Nodejs is used in server-side development.</td>

                                </tr>
                                <tr>
                                    <th>7</th>
                                    <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                    <td>Some of the Nodejs modules are Lodash, express etc. These modules are to<br /> be imported from npm. </td>

                                </tr>
                                <tr>
                                    <th>8</th>
                                    <td>It is the upgraded version of ECMA script that uses Chrome’s V8 <br />engine written in C++. </td>
                                    <td>Nodejs is written in C, C++ and Javascript.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </article >

            <article className={`max-w-7xl px-6 my-10 lg:px-16 py-24 mx-auto space-y-16  shadow-md ${dark ? "bg-base-200  " : "bg-primary"} ${!dark?"text-base-100":"text-gray-100" }`}>
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-none">How does Node JS handle multiple requests at the same time? </h1>
                    <div className={`flex flex-wrap space-x-2 text-sm ${!dark?"text-base-100":"text-gray-100" }`}>
                        <Link className="p-1 hover:underline">#NodeJS</Link>
                        <Link className="p-1 hover:underline">#JS</Link>
                        <Link className="p-1 hover:underline">#API</Link>
                    </div>
                    <p className={`text-sm ${!dark?"text-base-100":"text-gray-100" }`}>by
                        <Link to="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-yellow-600">
                            <span> MOZAMMEL </span>
                        </Link> on
                        <time datetime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
                    </p>
                </div>
                <div className={` text-justify ${!dark?"text-base-100":"text-gray-100" }`}>

                    <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        <br />
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.
                        <br />
                        Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
                        <br />
                        The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.
                        <br />
                        NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                        NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                        So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                        If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
                        <br />
                        How is NodeJS better than traditional multithreaded request response model?
                        With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request. </p>
                </div>
                
            </article>

        </div >
    );
};

export default Blog;