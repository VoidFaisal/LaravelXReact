import { Link } from "@inertiajs/react";
import React from "react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <div>
            <h1 className="title">Hello User</h1>

            <div>
                {posts.data.map((post) => (
                    <ul key={post.id} className="border-b">
                        <li className="p-4  text-black">{post.body}</li>
                        <p className="mt-1 px-4 ">
                            <span className="font-bold">Posted On: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </p>
                    </ul>
                ))}

                <div className="py-12 px-4">
                    {posts.links.map((link) =>
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-1 mx-1 ${
                                    link.active ? "font-bold text-blue-600" : ""
                                }`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="px-1 mx-1 text-gray-400"
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
