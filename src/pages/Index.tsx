import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark via-game-blue to-game-purple">
      {/* Header */}
      <header className="fixed top-0 w-full bg-game-dark/80 backdrop-blur-lg border-b border-game-accent/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white font-orbitron">
              AION
            </h1>
            <Badge variant="secondary" className="bg-game-purple text-white">
              PORTAL
            </Badge>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#gallery"
              className="text-white hover:text-game-purple transition-colors"
            >
              Галерея
            </a>
            <a
              href="#news"
              className="text-white hover:text-game-purple transition-colors"
            >
              Новости
            </a>
            <a
              href="#classes"
              className="text-white hover:text-game-purple transition-colors"
            >
              Классы
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-game-purple hover:bg-game-accent text-white">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Вход
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-game-dark border-game-accent text-white">
                <DialogHeader>
                  <DialogTitle>Вход в систему</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="username">Имя пользователя</Label>
                    <Input
                      id="username"
                      className="bg-game-blue/20 border-game-accent text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      className="bg-game-blue/20 border-game-accent text-white"
                    />
                  </div>
                  <Button className="w-full bg-game-purple hover:bg-game-accent">
                    Войти
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              className="border-game-accent text-white hover:bg-game-accent"
            >
              Скачать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <img
              src="/img/282f9734-a792-4c88-bafd-78f6783e28c9.jpg"
              alt="AION Game World"
              className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 text-left">
              <h2 className="text-4xl font-bold text-white mb-4">
                Добро пожаловать в мир AION
              </h2>
              <p className="text-xl text-game-light mb-6">
                Эпическое путешествие в мистическую вселенную
              </p>
              <Button
                size="lg"
                className="bg-game-purple hover:bg-game-accent text-white"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                ГАЛЕРЕЯ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group cursor-pointer">
                    <div className="w-full h-48 bg-gradient-to-br from-game-blue to-game-purple rounded-lg opacity-80 hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Image" size={48} className="text-white/60" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">НОВОСТИ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-game-blue/20 rounded-lg">
                  <h3 className="font-bold text-white mb-2">
                    Обновление: Возвращение Дерадикона!
                  </h3>
                  <p className="text-game-light text-sm">
                    Соберите группу и отправляйтесь на завоевание корабля врага!
                  </p>
                  <Badge className="mt-2 bg-game-purple text-white">
                    Новое
                  </Badge>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-game-dark to-game-blue rounded-lg flex items-center justify-center">
                  <Icon name="Newspaper" size={48} className="text-white/60" />
                </div>
              </CardContent>
            </Card>

            {/* Classes Section */}
            <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">КЛАССЫ</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/img/3397b9e6-6c78-4234-9980-5ed9e10bf87a.jpg"
                  alt="Game Classes"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Воин",
                    "Маг",
                    "Лучник",
                    "Целитель",
                    "Убийца",
                    "Защитник",
                  ].map((cls) => (
                    <div
                      key={cls}
                      className="p-2 bg-game-purple/20 rounded text-center"
                    >
                      <span className="text-white text-sm">{cls}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-game-purple mb-2">
                  50K+
                </div>
                <div className="text-white">Активных игроков</div>
              </CardContent>
            </Card>
            <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-game-purple mb-2">
                  15
                </div>
                <div className="text-white">Локаций</div>
              </CardContent>
            </Card>
            <Card className="bg-game-dark/60 border-game-accent backdrop-blur-lg text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-game-purple mb-2">
                  24/7
                </div>
                <div className="text-white">Поддержка</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-dark/80 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Icon name="Globe" size={24} className="text-game-purple" />
            <Icon name="Users" size={24} className="text-game-purple" />
            <Icon name="Shield" size={24} className="text-game-purple" />
            <Icon name="Zap" size={24} className="text-game-purple" />
          </div>
          <p className="text-game-light">
            © 2024 AION Gaming Portal. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
