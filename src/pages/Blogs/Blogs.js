import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div style={{color: 'gray', backgroundColor: 'black' }} className='text-center blogs'>
            <h1 style={{color: 'orange'}}>Blogs</h1>
            <div>
                <h4>Different Between Javascript vs Node.js</h4>
                <p>Javascript is a programming language but node is a interpreter or an environment of javascript.</p>
                <p>Js Use for client-side but node use for server-side.</p>
                <p>Js running engine is spider-monkey(fire-fox), javascript core(safari), v8(crome) but node run v8(google crome).</p>
            </div>
            <div>
                <h4>When should we use node.js and mongodb</h4>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. <br /> It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                <p>MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. <br /> As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.</p>
            </div>
            <div>
                <h4>Different between sql and nosql database</h4>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br /> SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br /> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>

            <div>
                <h4>What is the purpose of JWT and how does it works?</h4>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. <br /> Each JWT contains encoded JSON objects, including a set of claims. <br /> JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                
            </div>
        </div>
    );
};

export default Blogs;