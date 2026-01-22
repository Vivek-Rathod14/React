import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './Components/Profile-Card'
function App() {

  return (
    <>
      <div className="flex flex-wrap gap-8 ml-8">

        <ProfileCard
          name="Vivek"
          like={500}
          post={200}
          view={2000}
          link="https://cutiedp.com/wp-content/uploads/2025/08/street-single-boy-dp.webp"
        />

        <ProfileCard
          name="Raj"
          like={100}
          post={2}
          view={1500}
          link="https://i.pravatar.cc/150?img=1"
        />

        <ProfileCard
          name="Meet"
          like={1800}
          post={211}
          view={15000}
          link="https://i.pravatar.cc/150?img=2"
        />

        <ProfileCard
          name="Aman"
          like={320}
          post={45}
          view={4200}
          link="https://i.pravatar.cc/150?img=3"
        />

        <ProfileCard
          name="Rohit"
          like={980}
          post={120}
          view={8900}
          link="https://i.pravatar.cc/150?img=4"
        />

        <ProfileCard
          name="Kunal"
          like={60}
          post={8}
          view={900}
          link="https://i.pravatar.cc/150?img=5"
        />

        <ProfileCard
          name="Sahil"
          like={740}
          post={98}
          view={6500}
          link="https://i.pravatar.cc/150?img=6"
        />

        <ProfileCard
          name="Yash"
          like={1500}
          post={180}
          view={12000}
          link="https://i.pravatar.cc/150?img=7"
        />

      </div>
    </>

  );

}

export default App
