import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const [flashmsg,setFlashmsg] = useState(flash.message);
    const [fade, setFade] = useState(false);

  useEffect(() => {
    if (flash.message) {
      // After 1.5 sec, start fading
      const fadeTimer = setTimeout(() => {
        setFade(true);
      }, 1500);

      // After 2 sec, hide completely
      const hideTimer = setTimeout(() => {
        setFlashmsg(null);
      }, 2000);

      // Clean timers if component unmounts
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [flash.message]);

    // setTimeout(() => {
    //     setFlashmsg(null);
    // }, 2000);
    // console.log(usePage());
    return (
        
        <div>
             {flashmsg && (
        <div
          className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-2 rounded relative transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          role="alert"
        >
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">{flashmsg}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        </div>
      )}
            <h1 className="title">Hello User</h1>
           
            <div>
                {posts.data.map((post) => (
                    <ul key={post.id} className="border-b p4">
                        <li className="  text-black">{post.body}</li>
                        <p className="mt-1  ">
                            <span className="font-bold">Posted On: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </p>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">Read More...</Link> */}
                        <Link
                            href={route("posts.show", post)}
                            className="text-link"
                        >
                            Read More...
                        </Link>
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
