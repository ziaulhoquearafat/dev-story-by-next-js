import Title from "@/components/Title";

const TutorialPage = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];
  console.log(slug);

  return (
    <div>
      <Title>{technology} - Tutorials</Title>
      <h2>{topic}</h2> <hr />
      <div className="flex justify-between">
        <h3>{subject}</h3>
        <p>Page no: {page_no}</p>
      </div>
    </div>
  );
};

export default TutorialPage;
