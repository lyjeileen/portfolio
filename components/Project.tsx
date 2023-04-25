import Image from 'next/image';

export type ProjectItem = {
  name: string;
  image: string;
  tools: string[];
  description: string;
};

type ProjectProps = {
  project: ProjectItem;
};

export default function Project(props: ProjectProps) {
  const { project } = props;

  return (
    <>
      <p className="text-grassgreen text-2xl text-center font-bold mt-12 mb-4">
        {project.name}
      </p>
      <div className="relative aspect-video">
        <div className="flex self-center">
          <Image src={project.image} alt={project.name} fill />
        </div>
      </div>
    </>
  );
}
