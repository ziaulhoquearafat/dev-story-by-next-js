import Title from "@/components/Title";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Title>This is About Page</Title>
      <nav className="space-x-5">
        <Link href={"/about/contact"}>Contact</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </nav>
    </div>
  );
};

export default About;
