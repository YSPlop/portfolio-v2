import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";

interface PokemonCardProps {
  name: string;
  generation: string;
  favoriteGame: string;
}

export function PokemonCard({ name, generation, favoriteGame }: PokemonCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-center text-blue-700">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative w-full h-32">
          <Image
            src={`/pokemon/${name.toLowerCase()}.gif`}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-sm space-y-1">
          <p className="text-gray-400"><span className="text-gray-400 font-semibold">Favorite Gen:</span> {generation}</p>
          <p className="text-gray-400"><span className="text-gray-400 font-semibold">Favorite Game:</span> {favoriteGame}</p>
        </div>
      </CardContent>
    </Card>
  );
} 