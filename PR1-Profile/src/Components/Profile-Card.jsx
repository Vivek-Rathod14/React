import React, { useState } from 'react'
function ProfileCard({ name, like, post, view ,link }) {

    return (
        <div className="w-[320px] bg-white rounded-3xl shadow-lg overflow-hidden">

            <div className="relative h-36 bg-gradient-to-r from-sky-200 to-blue-300">
                <button className="absolute top-3 right-3 bg-white text-zinc-700 px-4 py-1 rounded-full text-sm font-semibold shadow">
                    Follow +
                </button>

                <div className="absolute -bottom-10 left-6">
                    <img
                        src={link}
                        alt="profile"
                        className="w-20 h-20 rounded-full border-4 border-white"
                    />
                </div>
            </div>

            <div className="pt-14 px-6 pb-5 " >
                <h2 className="text-zinc-700">{name}</h2>
                <p className="text-gray-500 text-sm mt-1">
                    Product Designer who focuses on simplicity & usability.
                </p>

                <div className="flex justify-center items-center gap-10 mt-5 border-t p-4 bg-[#F6F6F6] rounded-3xl">

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-zinc-700">{like}</p>
                        <span className="text-sm text-gray-500">Likes</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-zinc-700">{post}</p>
                        <span className="text-sm text-gray-500">Posts</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="font-bold text-zinc-700">{view}</p>
                        <span className="text-sm text-gray-500">Views</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProfileCard;
