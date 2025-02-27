import React from "react";
import { Github, Facebook, Twitter, Dribbble } from "lucide-react";
import gokhan from "../images/gokhan.jpeg";
import begum from "../images/begum.jpeg";
import member1 from "../images/team1.jpg";
import member2 from "../images/team2.jpg";
const TeamPage = () => {
  const teamMembers = [
    {
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: gokhan,
    },
    {
      name: "Begüm Nur Karabulut",
      role: "Full Stack Developer",
      image: begum,
    },
    {
      name: "Jese Leos",
      role: "SEO & Marketing",
      image: member2,
    },
    {
      name: "Lana Mcfall",
      role: "Sales",
      image: member1,
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{member.name}</a>
              </h3>
              <p>{member.role}</p>
              <ul className="flex justify-center mt-4 space-x-4">
                {[
                  { icon: Facebook, color: "#39569c" },
                  { icon: Twitter, color: "#00acee" },
                  { icon: Github, color: "gray-900" },
                ].map((social, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`text-[${social.color}] hover:text-gray-900 dark:hover:text-white`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
