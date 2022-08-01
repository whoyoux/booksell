import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

const fakeNewAddedBooks = [
    {
        id: ':id1:',
        name: 'Lorem Ipsum',
        desc: 'Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum',
        price: 29.99,
        author: 'Jan Kowalski',
        category: 'Matematyka',
        class: 3,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://wallpaperaccess.com/full/1209397.jpg'
            }
        ]
    },
    {
        id: ':id2:',
        name: 'Lorem Ipsum 2',
        desc: 'Lorem Ipsum 2222222',
        price: 15.9,
        author: 'Mariusz Pudzianowski',
        category: 'Język polski',
        class: 1,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://images6.alphacoders.com/346/346199.jpg'
            }
        ]
    },
    {
        id: ':id3:',
        name: 'Lorem Ipsum 3',
        desc: 'Ciekawe co',
        price: 49.99,
        author: 'Adam Malysz',
        category: 'WF',
        class: 2,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg'
            }
        ]
    },
    {
        id: ':id4:',
        name: 'Lorem Ipsum',
        desc: 'Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum',
        price: 29.99,
        author: 'Jan Kowalski',
        category: 'Matematyka',
        class: 3,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://wallpaperaccess.com/full/1209397.jpg'
            }
        ]
    },
    {
        id: ':id5:',
        name: 'Lorem Ipsum 2',
        desc: 'Lorem Ipsum 2222222',
        price: 15.9,
        author: 'Mariusz Pudzianowski',
        category: 'Język polski',
        class: 1,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://images6.alphacoders.com/346/346199.jpg'
            }
        ]
    },
    {
        id: ':id6:',
        name: 'Lorem Ipsum 3',
        desc: 'Ciekawe co',
        price: 49.99,
        author: 'Adam Malysz',
        category: 'WF',
        class: 2,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg'
            }
        ]
    },
    {
        id: ':id7:',
        name: 'Lorem Ipsum',
        desc: 'Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum',
        price: 29.99,
        author: 'Jan Kowalski',
        category: 'Matematyka',
        class: 3,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://wallpaperaccess.com/full/1209397.jpg'
            }
        ]
    },
    {
        id: ':id8:',
        name: 'Lorem Ipsum 2',
        desc: 'Lorem Ipsum 2222222',
        price: 15.9,
        author: 'Mariusz Pudzianowski',
        category: 'Język polski',
        class: 1,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://images6.alphacoders.com/346/346199.jpg'
            }
        ]
    },
    {
        id: ':id9:',
        name: 'Lorem Ipsum 3',
        desc: 'Ciekawe co',
        price: 49.99,
        author: 'Adam Malysz',
        category: 'WF',
        class: 2,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg'
            }
        ]
    },
    {
        id: ':id10:',
        name: 'Lorem Ipsum',
        desc: 'Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum Lorem Ipsum Ipsum Ipsum',
        price: 29.99,
        author: 'Jan Kowalski',
        category: 'Matematyka',
        class: 3,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://wallpaperaccess.com/full/1209397.jpg'
            }
        ]
    },
    {
        id: ':id12:',
        name: 'Lorem Ipsum 2',
        desc: 'Lorem Ipsum 2222222',
        price: 15.9,
        author: 'Mariusz Pudzianowski',
        category: 'Język polski',
        class: 1,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://images6.alphacoders.com/346/346199.jpg'
            }
        ]
    },
    {
        id: ':id13:',
        name: 'Lorem Ipsum 3',
        desc: 'Ciekawe co',
        price: 49.99,
        author: 'Adam Malysz',
        category: 'WF',
        class: 2,
        addedBy: 'whoyoux',
        createdAt: Date.now(),
        images: [
            {
                url: 'https://i.pinimg.com/originals/c8/b0/7e/c8b07e380215edaaa1903769586a61dc.jpg'
            }
        ]
    }
];

const Home: NextPage = () => {
    const [bookName, setBookName] = useState('');

    const findBooks = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const trimmedBookName = bookName.trimStart().trimEnd();

        if (!trimmedBookName)
            return alert('Pole z nazwą książki nie może być puste!');

        console.log(trimmedBookName);
    };

    return (
        <div className="text-center w-4/5 mx-auto">
            <div className="mt-10">
                <form onSubmit={findBooks} className="mb-20">
                    <label
                        className="block text-xl font-medium mb-8"
                        htmlFor="username"
                    >
                        Znajdź książkę dla siebie
                    </label>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <input
                            className="appearance-none border rounded md:rounded-l md:rounded-r-none w-full max-w-xl py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-5 md:mb-0"
                            id="username"
                            type="text"
                            placeholder="Matematyka z plusem..."
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                        <input
                            type="submit"
                            className="py-3 w-full max-w-xl md:w-auto md:max-w-none md:px-5 bg-indigo-500 rounded md:rounded-r md:rounded-l-none border border-indigo-500  text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all cursor-pointer"
                            value="Szukaj"
                        />
                    </div>
                </form>

                <main>
                    <h1 className="text-xl font-medium">
                        Niedawno dodane książki
                    </h1>
                    <div className="flex flex-row gap-10 pt-10 flex-wrap items-center justify-center">
                        {fakeNewAddedBooks.map((book) => {
                            return <Book {...book} key={book.id} />;
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
};

type BookType = typeof fakeNewAddedBooks[0];

const Book = (book: BookType) => {
    return (
        <div className="w-full max-w-sm text-left xl:basis-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={book.images[0].url}
                alt={book.name}
                className="w-full h-48 rounded"
            />
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h2 className="text-xl font-medium my-2 hover:underline">
                        <Link href={`books/${book.id}`}>{book.name}</Link>
                    </h2>
                    <h3 className="font-medium my-2">{book.author}</h3>
                </div>
                <div className="text-right">
                    <h2 className="text-xl font-medium my-2">
                        {book.price.toFixed(2)} PLN
                    </h2>
                    {/* <h3 className="font-medium m-2">{book.addedBy}</h3> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
