import React from 'react';
import { Appbar } from '../components/Appbar';

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Khushi Pant',
    title: 'Founder',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238396.png',
  },
  {
    name: 'Abhay',
    title: 'Co-Founder',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238374.png',
  },
  {
    name: 'Rohit Aswal',
    title: 'Head Security',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238411.png',
  },
  {
    name: 'Akansha Uniyal',
    title: 'Network Security',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238425.png',
  },
  {
    name: 'Ankit Kumar',
    title: 'Full-Stack Developer',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  },
  {
    name: 'Abhishek Kumar',
    title: 'Full-Stack Developer',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  },
  {
    name: 'Anuj Upadhyay',
    title: 'Developer',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  },
  {
    name: 'Anish Anand',
    title: 'Penetration Tester',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  },
  {
    name: 'Debasish Sahu',
    title: 'Penetration Tester',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  },
  {
    name: 'Gourav Samal',
    title: 'Penetration Tester',
    imageUrl: 'https://pagedone.io/asset/uploads/1696238446.png',
  }
];

export default function TeamSection(){
  return (
    <div>
      <Appbar />
      <div className="isolate py-7 bg-black">
      <div
        className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative right-0 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-white">Our Team</h2>
        </div>
        {/* FOUNDERS DIV */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="block group md:col-span-1">
                <div className="relative mb-6">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} image`}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-white"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-400">
                  {member.name}
                </h4>
                <span className="text-gray-400 text-center block transition-all duration-500 group-hover:text-gray-200">
                  {member.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* MEMBERS DIV */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full mt-8">
            {teamMembers.slice(2).map((member, index) => (
              <div key={index} className="block group md:col-span-1">
                <div className="relative mb-6">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} image`}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-white"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-400">
                  {member.name}
                </h4>
                <span className="text-gray-400 text-center block transition-all duration-500 group-hover:text-gray-200">
                  {member.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
