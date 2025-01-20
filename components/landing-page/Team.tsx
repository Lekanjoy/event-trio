import Link from "next/link";
import Image from "next/image";
import linkedin from "@/public/landing-page/LinkedIn.svg";
import X from "@/public/landing-page/X.svg";
import web from "@/public/landing-page/Dribble.svg";
import { cn } from "@/lib/utils";
import { teamData } from "@/data";


const Team = () => {
  return (
    <section className="w-full px-4 pb-16 flex flex-col justify-center items-center lg:px-16 lg:pb-[112px]">
      <div className="flex flex-col text-center">
        <span className="text-sm font-semibold mb-3">Meet</span>
        <h5 className="font-bold text-4xl mb-2">Our Team</h5>
        <p className="text-sm">
          Dedicated professionals bringing your events to life.
        </p>
      </div>

      <div className="grid mt-12 gap-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 2xl:grid-cols-4">
        {teamData.map((member) => {
          return (
            <div
              key={member.id}
              className="flex items-center justify-center flex-col"
            >
              <Image
                src={member.img}
                alt={member.name}
                className={cn(
                  "mb-5 object-top object-cover h-[395px] ",
                  member.id === 2 ? "object-center" : ""
                )}
              />
              <p className="font-semibold lg:text-lg">{member.name}</p>
              <p className="mb-2 text-sm lg:mb-3 lg:text-base">{member.role}</p>
              <span className="text-sm text-center lg:w-[263px]">
                {member.text}
              </span>
              <div className="flex gap-x-3 mt-5">
                <Link href={""} className="w-6 h-6">
                  <Image
                    src={linkedin}
                    alt="Linkedin icon"
                    className="w-full h-full"
                  />
                </Link>
                <Link href={""} className="w-6 h-6">
                  <Image src={X} alt="X icon" className="w-full h-full" />
                </Link>
                <Link href={""} className="w-6 h-6">
                  <Image
                    src={web}
                    alt="website icon"
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
