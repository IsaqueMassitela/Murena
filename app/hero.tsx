"use client";

import { Button } from "@/app/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundUrl = "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
}) => {
  return (
    <>
    <section
      className="text-center py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl inline-block">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">{subtitle}</p>
        <Button asChild>
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </section>

    <div className="grid grid-cols-4 gap-6 p-10 place-items-center">
  {/* Card 1 */}
  <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
    <img
      src="/Casa1.jpeg"
      alt="Imagem 1"
      className="w-full h-32 object-cover"
    />
    <div className="p-4 text-center">
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eius quidem voluptatibus earum voluptate ratione quos minima praesentium exercitationem.
      </p>
    </div>
    <div className="pb-4">
      <Button asChild>
          <a href={"google.com"}>{"Saber mais..."}</a>
      </Button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
    <img
      src="/Casa2.jpeg"
      alt="Imagem 2"
      className="w-full h-32 object-cover"
    />
    <div className="p-4 text-center">
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eius quidem voluptatibus earum voluptate ratione quos minima praesentium exercitationem.
      </p>
    </div>
    <div className="pb-4">
      <Button asChild>
          <a href={"google.com"}>{"Saber mais..."}</a>
      </Button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
    <img
      src="/Casa3.jpeg"
      alt="Imagem 3"
      className="w-full h-32 object-cover"
    />
    <div className="p-4 text-center">
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eius quidem voluptatibus earum voluptate ratione quos minima praesentium exercitationem.
      </p>
    </div>
    <div className="pb-4">
      <Button asChild>
          <a href={"google.com"}>{"Saber mais..."}</a>
      </Button>
    </div>
  </div>

  {/* Card 4 */}
  <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
    <img
      src="/Casa4.jpeg"
      alt="Imagem 4"
      className="w-full h-32 object-cover"
    />
    <div className="p-4 text-center">
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eius quidem voluptatibus earum voluptate ratione quos minima praesentium exercitationem.
      </p>
    </div>
    <div className="pb-4">
      <Button asChild>
          <a href={"www.google.com"}>{"Saber mais..."}</a>
      </Button>
    </div>
  </div>
</div>

    </>
  );
};
