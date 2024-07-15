import React from 'react';
import { Appbar } from '../components/Appbar';

// interface TeamMemberProps {
//   name: string;
//   role: string;
//   imageSrc: string;
// }

export default function OurTeam() {
  return (
    <div className="bg-black">
      <Appbar />
    </div>
  );
};

// const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
//   return (
//     <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
//       <img className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300" src={imageSrc} alt={name} />

//       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>

//       <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{role}</p>

//     </div>
//   );
// };

