import React from "react";
import { Link } from "react-router-dom";

const Resistration = () => {
    return (
        <div className="bg-gradient-to-b from-black via-purple-900 pt-[60px] to-black h-full min-h-screen">
            <div className="absolute top-4 left-4">
                <Link to="/" className="w-fit">
                    <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
                        Back
                    </button>
                </Link>
            </div>
            <h1 className="md:text-5xl text-3xl  font-bold text-center my-8 text-white">Register Yourself</h1>
            <div className=" h-full mx-auto border-2 rounded-xl md:p-6 md:w-[80%] w-[95%] ">
                <form
                    action="#"
                    className="flex flex-col space-y-9 p-3 mx-auto"
                >
                    <div className="name flex items-center space-x-4 text-white">
                        <label htmlFor="name"><span className="text-lg font-bold">Name:</span></label>
                        <input
                            type="text"
                            className="border-2 w-full md:w-[80%] rounded-sm outline-none text-black bg-slate-200 "
                            name="name"
                            placeholder="Enter your full Name..."
                            required
                        />
                    </div>
                    <div className="RollNumber flex  items-center space-x-4 text-white">
                        <label htmlFor="RollNumber"><span className="text-lg font-bold">Roll Number:</span></label>
                        <input
                            type="text"
                            name="RollNumber"
                            className="border-2 w-[50%] rounded-sm outline-none text-black bg-slate-200"
                            placeholder="Enter your Roll Number..."
                            required
                        />
                    </div>
                    <div className="courseInfo text-white flex justify-between flex-row flex-wrap items-center space-y-4 md:space-y-0 space-x-4">
                        <div className="space-x-3">
                            <label htmlFor="Course"><span className="text-lg font-bold">Course:</span></label>
                            <select name="Course" id="Course" className="border-2 text-black rounded-sm outline-none bg-slate-200" required>
                                <option value="BTech">B-Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Resistration;
