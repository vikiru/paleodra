import { Card, CardContent, CardDescription } from '@/components/ui/card';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeaturesCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <Card className="bg-background shadow-sm">
      <CardContent className="p-6 text-center">
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="mb-2 font-heading text-xl font-semibold text-primary">
          {title}
        </h3>
        <CardDescription className="text-sm sm:text-base font-medium text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
