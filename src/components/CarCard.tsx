import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface CarCardProps {
  image: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  originalPrice: number;
  mileage: number;
  transmission: string;
  fuelType: string;
}

const CarCard = ({
  image,
  year,
  make,
  model,
  trim,
  price,
  originalPrice,
  mileage,
  transmission,
  fuelType,
}: CarCardProps) => {
  const basePrice = 17490;
  const isv = 545;
  const serviceFee = 2450;
  const ivaOnService = 564;
  const total = basePrice + isv + serviceFee + ivaOnService;
  const finalPrice = 21049;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 bg-card">
      <div className="grid md:grid-cols-[380px,1fr] gap-0">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${year} ${make} ${model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Details Section */}
        <div className="p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-card-foreground uppercase mb-1">
              {make} {model} {trim}
            </h3>
          </div>

          {/* Specs Row */}
          <div className="grid grid-cols-4 gap-4 mb-6 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Quilómetros</p>
              <p className="font-semibold text-card-foreground">{mileage.toLocaleString()} km</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Potência</p>
              <p className="font-semibold text-card-foreground">163 CV (120 kW) CV</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Cilindrada</p>
              <p className="font-semibold text-card-foreground">1332 ccm</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Ano</p>
              <p className="font-semibold text-card-foreground">{year < 2000 ? `0${year}` : year}</p>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-muted/30 p-4 rounded-lg mb-4">
            <h4 className="font-bold text-card-foreground mb-3">Resultado da Simulação</h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Valor da Viatura</span>
                <span className="font-bold text-card-foreground">{basePrice.toLocaleString()} €</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">ISV</span>
                <span className="font-bold text-card-foreground">{isv.toLocaleString()} €</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Taxa de serviço</span>
                <span className="font-bold text-card-foreground">{serviceFee.toLocaleString()} €</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">IVA (da taxa de serviço)</span>
                <span className="font-bold text-card-foreground">{ivaOnService.toLocaleString()} €</span>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="text-muted-foreground font-semibold">Total</span>
                <span className="font-bold text-card-foreground">{total.toLocaleString()} €</span>
              </div>
            </div>
          </div>

          {/* Final Price */}
          <div className="bg-foreground text-background p-4 rounded-lg flex justify-between items-center">
            <span className="font-bold text-base">Preço Chave na Mão:</span>
            <span className="font-bold text-2xl">{finalPrice.toLocaleString()} €</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
