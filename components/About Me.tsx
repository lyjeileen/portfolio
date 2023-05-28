import { AiTwotoneStar } from 'react-icons/ai';
export default function AboutMe() {
  return (
    <>
      <div className="flex justify-center mt-20" id="about">
        <AiTwotoneStar className="w-7 h-7 fill-softred md:w-9 md:h-9" />
        <h1 className="text-grassgreen text-2xl md:text-4xl text-center font-bold mx-2">
          About Me
        </h1>
        <AiTwotoneStar className="w-7 h-7 fill-softred md:w-9 md:h-9" />
      </div>
      <p className="text-left text-md md:text-xl text-md text-grassgreen p-10">
        I am originally from China and have been living in Canada for the past 7
        years. While I initially pursued a career in the natural health product
        industry as a QA, I soon realized that my true passion lies in creating
        and problem-solving. The repetitive nature of some tasks left me longing
        for more dynamic challenges. This realization led me to explore software
        development, where I could build things from scratch and tackle complex
        problems. I am detail-oriented and commited to consistently producing
        the highest quality work. I am excited to keep learning new skills and
        technologies and use them to create something meaningful. In my free
        time, I enjoy strolling along the seaside and savoring delicious food.
      </p>
    </>
  );
}
