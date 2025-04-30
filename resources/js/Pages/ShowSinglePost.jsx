import { useForm } from "@inertiajs/react";
import React from "react";
import {useRoute} from "../../../vendor/tightenco/ziggy"


export default function ShowSinglePost({ post }) {
     const route = useRoute();
    const {delete : destroy} = useForm();
    console.log(useForm());
    function submit(e){
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route(`posts.destroy`,post));
    }

    return (
        <>
            <ul className="border-b p4 mt-4 ">
                <li className="text-black ">{post.body}</li>
                <p className="mt-1  ">
                    <span className="font-bold">Posted On: </span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </p>
                {/* <Link href={`/posts/${post.id}`} className="text-link">Read More...</Link> */}
                {/* <Link href={route("posts.show", post)} className="text-link">
                    Read More...
                </Link> */}
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 py-2 px-4 rounded-full mb-1 cursor-pointer hover:bg-red-700 hover:text-white">Delete</button>
                    </form>
                </div>
            </ul>
        </>
    );
}
