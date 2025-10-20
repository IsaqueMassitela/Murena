import { Card, CardContent } from "@/app/components/ui/card ";

const imagens = [
  "/images/vivenda1.jpg",
  "/images/vivenda2.jpg",
  "/images/vivenda3.jpg",
  "/images/vivenda4.jpg",
  "/images/vivenda5.jpg",
  "/images/vivenda6.jpg",
];

export default function Vivendas() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Nossas Vivendas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {imagens.map((img, i) => (
          <Card key={i} className="shadow-md hover:shadow-lg transition">
            <img
              src={img}
              alt={`Vivenda ${i + 1}`}
              className="rounded-t-2xl h-56 w-full object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Vivenda {i + 1}</h3>
              <p className="text-gray-600 mb-2">3 quartos • 2 suítes • 250m²</p>
              <p className="text-green-700 font-semibold">R$ 1.200.000</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
