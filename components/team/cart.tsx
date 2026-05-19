import Image from 'next/image';
import Row from '../global/Row';
import { FaLinkedin } from 'react-icons/fa';

const team = [
  { name: 'Hadi Hasan Pour', role: 'Founder & CEO', image: '/images/ourteam/hadi.svg' },
  { name: 'Mahsa Esmaeili', role: 'Legal Advisor', image: '/images/ourteam/mahsa.svg' },
  { name: 'Iman Nasr Esfahani', role: 'COO', image: '/images/ourteam/iman.png' },
  { name: 'Lida Parvizi', role: 'HR & Administrative', image: '/images/ourteam/lida.svg' },
  { name: 'Gelareh Bahrami', role: 'Sales Officer', image: '/images/ourteam/gelareh.svg' },
  { name: 'Parastoo Sanaifar', role: 'Business Advisor', image: '/images/ourteam/parastoo.svg' },
  { name: 'Milad Fatemi', role: 'Business Advisor', image: '/images/ourteam/milad.svg' },
  { name: 'Mehdi Esmaeili', role: 'Front-End Developer', image: '/images/ourteam/pouya.svg' },
  { name: 'Sajjad Momeni', role: 'Full-Stack Developer', image: '/images/ourteam/sajjad.png' },
  { name: 'Ali Soleimani', role: 'Accountant', image: '/images/ourteam/ali.svg' },
  { name: 'Narjes Orouji', role: 'UI/UX Designer', image: '/images/ourteam/narges.svg' },
  { name: 'Amir Esfahanizade', role: 'Back-End Developer', image: '/images/ourteam/amirmohammad.svg' },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 md:px-20 px-4 w-full">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative overflow-hidden pt-8 rounded-2xl"
        
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              priority={index < 4}
              className="object-cover"
            />

            {/* content EXACTLY like image */}
            <div className="relative mt-20 p-4 pt-20 text-white ">
              <div className="flex justify-between items-end">
                <div className='mt-20'>
                  <h3 className="text-2xl mt-20">
                    {member.name}
                  </h3>
                  <p className="text-lg mt-2 ">
                    {member.role}
                  </p>
                </div>

                <a
                  href="#"
                  className=" hover:bg-white hover:text-blue-600
                   p-2 rounded-lg backdrop-blur transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

