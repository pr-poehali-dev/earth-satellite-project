import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Физические принципы работы спутников',
    content: [
      {
        subtitle: 'Гравитация и орбитальная скорость',
        text: 'Спутник остаётся на орбите благодаря балансу между гравитационным притяжением Земли и центробежной силой. Первая космическая скорость для низкой орбиты составляет около 7,9 км/с.',
      },
      {
        subtitle: 'Законы Кеплера',
        text: 'Движение спутников подчиняется трём законам Кеплера: эллиптические орбиты, изменение скорости на орбите, связь периода обращения с расстоянием до Земли.',
      },
      {
        subtitle: 'Энергоснабжение',
        text: 'Солнечные панели обеспечивают энергией бортовые системы. Аккумуляторы накапливают энергию для работы в тени Земли.',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/8f64d719-b2d7-43a5-8d17-cf6303996d64/files/ddc84bad-412f-4849-b79d-f7db1dbdd61e.jpg',
  },
  {
    id: 2,
    title: 'Типы орбит спутников',
    content: [
      {
        subtitle: 'LEO (Low Earth Orbit)',
        text: 'Низкая околоземная орбита, 160–2000 км. Используется для наблюдения Земли, связи, научных исследований. Период обращения: 90–120 минут.',
        icon: 'Orbit',
      },
      {
        subtitle: 'MEO (Medium Earth Orbit)',
        text: 'Средняя орбита, 2000–35786 км. Применяется для навигационных систем GPS, ГЛОНАСС, Galileo. Период обращения: 2–24 часа.',
        icon: 'Navigation',
      },
      {
        subtitle: 'GEO (Geostationary Orbit)',
        text: 'Геостационарная орбита, 35786 км. Спутник неподвижен относительно Земли. Идеально для телекоммуникаций и метеорологии. Период: 24 часа.',
        icon: 'Radio',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/8f64d719-b2d7-43a5-8d17-cf6303996d64/files/ddc84bad-412f-4849-b79d-f7db1dbdd61e.jpg',
  },
  {
    id: 3,
    title: 'Метеорологические спутники',
    content: [
      {
        subtitle: 'Примеры и применение',
        text: 'NOAA (США), Метеор-М (Россия), Meteosat (Европа) — ключевые метеорологические спутники для мониторинга погоды и климата.',
      },
      {
        subtitle: 'Функции',
        text: 'Мониторинг облачности, температуры поверхности океана, влажности атмосферы. Отслеживание ураганов, тайфунов и других природных явлений.',
      },
      {
        subtitle: 'Технологии',
        text: 'Инфракрасные и видимые спектры для анализа атмосферы. Данные передаются метеостанциям в режиме реального времени.',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/8f64d719-b2d7-43a5-8d17-cf6303996d64/files/ba2285e5-b4f5-46dd-b3b7-54812698d62d.jpg',
  },
  {
    id: 4,
    title: 'Перспективы развития',
    content: [
      {
        subtitle: 'Мегасозвездия спутников',
        text: 'Starlink (SpaceX), OneWeb — тысячи малых спутников для глобального интернета. Обеспечат связь в отдалённых регионах планеты.',
      },
      {
        subtitle: 'Новые технологии',
        text: 'Ионные двигатели для более эффективного маневрирования. Лазерная связь между спутниками. Искусственный интеллект для автономного управления.',
      },
      {
        subtitle: 'Экология космоса',
        text: 'Разработка систем очистки орбиты от космического мусора. Создание спутников, полностью сгорающих при входе в атмосферу.',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/8f64d719-b2d7-43a5-8d17-cf6303996d64/files/f5303fd2-f276-4ca7-926e-2dc9eb83eec5.jpg',
  },
  {
    id: 5,
    title: 'Итоговый слайд',
    content: [
      {
        subtitle: 'Ключевые выводы',
        text: 'Искусственные спутники Земли — основа современных коммуникаций, навигации и науки. Физика орбит определяет их применение и возможности.',
      },
      {
        subtitle: 'Важность для человечества',
        text: 'Спутники обеспечивают прогноз погоды, интернет, GPS, телевидение, мониторинг климата. Без них современная жизнь была бы невозможна.',
      },
      {
        subtitle: 'Будущее космоса',
        text: 'Массовое развёртывание спутниковых созвездий откроет новые возможности для связи и науки. Человечество продолжит освоение околоземного пространства.',
      },
    ],
    image: 'https://cdn.poehali.dev/projects/8f64d719-b2d7-43a5-8d17-cf6303996d64/files/f5303fd2-f276-4ca7-926e-2dc9eb83eec5.jpg',
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0EA5E9] via-[#8B5CF6] to-[#D946EF] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-6xl">
        <div className="bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 animate-scale-in">
          <div className="relative h-[600px] flex flex-col md:flex-row">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#D946EF]" />
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto animate-fade-in">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Satellite" className="text-primary" size={32} />
                  <h1 className="font-heading text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </h1>
                </div>

                <div className="space-y-6">
                  {slides[currentSlide].content.map((item, idx) => (
                    <Card
                      key={idx}
                      className="bg-muted/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {item.icon && (
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon name={item.icon} className="text-primary" size={24} />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                              {item.subtitle}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="lg"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  disabled={currentSlide === 0}
                >
                  <Icon name="ChevronLeft" size={20} className="mr-2" />
                  Назад
                </Button>

                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? 'bg-primary w-8'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Слайд ${idx + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  variant="default"
                  size="lg"
                  className="group bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#D946EF] hover:opacity-90 transition-all duration-300"
                  disabled={currentSlide === slides.length - 1}
                >
                  Далее
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                key={currentSlide}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-white text-sm font-semibold">
                    Слайд {currentSlide + 1} из {slides.length}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    Искусственные спутники Земли в физике и в жизни
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-white/90 text-sm font-medium">
            Используйте клавиши ← → для навигации
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
