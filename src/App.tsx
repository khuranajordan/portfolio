import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Portfolio Foundation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              shadcn/ui components configured and ready
            </p>
            <div className="flex gap-2">
              <Badge variant="default">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">Tailwind</Badge>
            </div>
            <div className="flex gap-2 pt-4">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
