import { Card, CardContent, CardDescription } from '@/components/ui/card';

type StatsCardProps = {
  value: string;
  label: string;
};

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <Card className="bg-background">
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold text-primary mb-2">{value}</div>
        <CardDescription className="text-sm sm:text-base font-medium text-muted-foreground">{label}</CardDescription>
      </CardContent>
    </Card>
  );
}
