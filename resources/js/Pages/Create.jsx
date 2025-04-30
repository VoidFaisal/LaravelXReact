import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({ body: "" });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }
    console.log(errors);

    return (
        <div>
            <h1 className="title">Create a New Post</h1>
            <div className=" w-1/2 mx-auto ">
                <form onSubmit={submit}>
                    <textarea
                        name=""
                        id=""
                        rows="10"
                        val={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    ></textarea>
                    {errors.body && <p className="text-red-500">{errors.body}</p>}
                          
                    <button className="primary-btn mt-2" disabled={processing}>Submit</button>
                </form>
            </div>
        </div>
    );
}
