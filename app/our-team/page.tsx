import React from 'react';
import { Appbar } from '../components/Appbar';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

export default function() {
  return (
    <div className="bg-black">
      <Appbar />
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">Our Team</h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div className="flex items-center grid grid-cols-1 mx-60 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {/* Individual team member component */}
          <TeamMember
            name="Khushi Pant"
            role="Founder"
            imageSrc="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />

          <TeamMember
            name="Abhay"
            role="Co-Founder"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Rohit Aswal"
            role="Head Security"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Akansha Uniyal"
            role="Network Security"
            imageSrc="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
          <TeamMember
            name="Ankit Kumar"
            role="Full-Stack Developer"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Abhishek Kumar"
            role="Full-Stack Developer"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Anuj Upadhyay"
            role="Developer"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Anish Anand"
            role="Penetration Tester"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Debasish Sahu"
            role="Penetration Tester"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <TeamMember
            name="Gourav Samal"
            role="Penetration Tester"
            imageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />

          {/* Add more TeamMember components as needed */}
        </div>
      </div>
    </div>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
      <img className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300" src={imageSrc} alt={name} />

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>

      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{role}</p>

    </div>
  );
};

