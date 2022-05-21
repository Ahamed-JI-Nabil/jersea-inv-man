import React from 'react';

const Blogs = () => {
    return (
        <div className='p-8'>
            <h2 className='text-xl'>Difference between javascript and node.js?</h2>
            <p className='mb-9'> JavaScript is a high-level Object-oriented programming language that can be used on the client-side as well as on the server-side.
                <br />
                NodeJS is a Javascript runtime environment.It is mostly used on the server-side.Nodejs is written in C, C++ and Javascript.
            </p>

            <h2 className='text-xl'>When should I use node.js and when should I use mongodb?</h2>
            <p className='mb-9'>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.
                <br />
                Nodejs is a Javascript engine. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
            </p>
            <h2 className='text-xl'>Difference between SQL and NoSQL?</h2>
            <p className='mb-9'>Structured Query language (SQL) is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables. SQL programming can be effectively used to insert, search, update, delete database records.
                <br />
                NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
            </p>
            <h2 className='text-xl'>what is the Purpose of jwt?</h2>
            <p className='mb-9'>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

        </div>
    );
};

export default Blogs;