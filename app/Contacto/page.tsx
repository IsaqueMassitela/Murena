import { Button } from "@/app/components/ui/button";

export default function Contato() {
  return (
    <section className="p-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
      <p className="text-gray-600 mb-6">
        Quer saber mais sobre o MURENA? Envie-nos uma mensagem.
      </p>

      <form className="flex flex-col gap-4 mb-8">
        <input type="text" placeholder="Seu nome" className="border p-2 rounded" />
        <input type="email" placeholder="Seu e-mail" className="border p-2 rounded" />
        <textarea placeholder="Mensagem" rows={4} className="border p-2 rounded"></textarea>
        <Button>Enviar</Button>
      </form>

      {/* Substitua este link pelo mapa real do condomínio */}
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6378047102737!2d-46.66232558553873!3d-23.58005496871035"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
