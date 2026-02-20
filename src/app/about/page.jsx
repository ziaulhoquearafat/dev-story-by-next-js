import Title from "@/components/Title";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Title>Welcome To My About Page</Title>
      <nav className="space-x-5">
        <Link href={"/about/team"}>Team</Link>
        <Link href={"/about/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default About;
