import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import CarCard from "@/components/CarCard";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carTruck from "@/assets/car-truck.jpg";
import carCompact from "@/assets/car-compact.jpg";
import carCoupe from "@/assets/car-coupe.jpg";
import carVan from "@/assets/car-van.jpg";

const Index = () => {
  const deals = [
    {
      image: carSedan,
      year: 2021,
      make: "Honda",
      model: "Accord",
      trim: "EX-L",
      price: 24995,
      originalPrice: 28500,
      mileage: 32000,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
    {
      image: carSuv,
      year: 2020,
      make: "Toyota",
      model: "RAV4",
      trim: "XLE Premium",
      price: 27495,
      originalPrice: 32990,
      mileage: 28500,
      transmission: "Automatic",
      fuelType: "Hybrid",
    },
    {
      image: carTruck,
      year: 2019,
      make: "Ford",
      model: "F-150",
      trim: "XLT SuperCrew",
      price: 31995,
      originalPrice: 37500,
      mileage: 45000,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
    {
      image: carCompact,
      year: 2022,
      make: "Mazda",
      model: "3",
      trim: "Premium",
      price: 19995,
      originalPrice: 23800,
      mileage: 18000,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
    {
      image: carCoupe,
      year: 2020,
      make: "BMW",
      model: "4 Series",
      trim: "430i Coupe",
      price: 34995,
      originalPrice: 42500,
      mileage: 24000,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
    {
      image: carVan,
      year: 2021,
      make: "Chrysler",
      model: "Pacifica",
      trim: "Touring L",
      price: 29995,
      originalPrice: 35900,
      mileage: 22000,
      transmission: "Automatic",
      fuelType: "Gasoline",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FilterBar />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Ofertas em Destaque
          </h2>
          <p className="text-muted-foreground mb-4">
            {deals.length} ofertas incríveis disponíveis • Atualizadas diariamente
          </p>
          <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent font-semibold">Nota:</strong> Selecionamos apenas os stands mais reputados para garantir a qualidade e confiança em cada negócio.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {deals.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 K'importa. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Ofertas atualizadas diariamente • Relatórios de histórico gratuitos • Garantia de 30 dias incluída</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
