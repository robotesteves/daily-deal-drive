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
  const savings = originalPrice - price;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 bg-card">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-savings text-savings-foreground font-bold px-3 py-1.5 text-base shadow-lg">
          Save ${savings.toLocaleString()}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-card-foreground mb-1">
            {year} {make} {model}
          </h3>
          {trim && (
            <p className="text-muted-foreground text-sm">{trim}</p>
          )}
        </div>

        <div className="flex items-end gap-3 mb-4">
          <div>
            <p className="text-3xl font-bold text-primary">
              ${price.toLocaleString()}
            </p>
          </div>
          <div className="pb-1">
            <p className="text-muted-foreground line-through text-sm">
              ${originalPrice.toLocaleString()}
            </p>
            <p className="text-savings font-semibold text-sm">
              {savingsPercent}% off
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Mileage</p>
            <p className="text-sm font-semibold text-card-foreground">
              {mileage.toLocaleString()} mi
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Transmission</p>
            <p className="text-sm font-semibold text-card-foreground">{transmission}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Fuel Type</p>
            <p className="text-sm font-semibold text-card-foreground">{fuelType}</p>
          </div>
        </div>

        <button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 px-4 rounded-lg transition-colors">
          View Details
        </button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
