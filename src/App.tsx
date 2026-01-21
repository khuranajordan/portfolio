import { ThemeToggle } from '@/components/theme-toggle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Theme System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Light/dark mode is working! Use the toggle in the header to switch themes.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold">Smooth Transitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Theme changes animate smoothly over 300ms for all colors and backgrounds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-semibold">Persistent Preference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your theme choice is saved and persists across page refreshes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
