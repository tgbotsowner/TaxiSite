import {
  Phone,
  Clock,
  Car,
  MapPin,
  Package,
  DollarSign,
  Globe,
  MousePointerClick,
  Users,
  Star,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import carImage from "@assets/photo_2025-10-26_15-30-58_1761485468561.jpg";

const PHONE_NUMBER = "+380777799989";
const PHONE_DISPLAY = "+380 777 799 989";
const TELEGRAM_LINK = `https://t.me/${PHONE_NUMBER}`;
const TELEGRAM_BOT_LINK = "https://t.me/TaxiDnepr_24_7_bot";
const VIBER_LINK = `viber://chat?number=${encodeURIComponent("+380992311552")}`;

const advantages = [
  {
    icon: Clock,
    title: "Заберем с любой точки Днепра",
    description: "Даже ночью и в комендантский час",
  },
  {
    icon: Car,
    title: "Комфортный автомобиль бизнес-класса",
    description: "Чистый салон, кондиционер",
  },
  {
    icon: MapPin,
    title: "Переезд через мост — не проблема",
    description: "Даже при перекрытии",
  },
  {
    icon: Package,
    title: "Доставка еды и лекарств",
    description: "Бургеры, шаурма, алкоголь, лекарства, зарядки, пауэрбанки",
  },
  {
    icon: DollarSign,
    title: "Честные тарифы",
    description: "Каждый маршрут рассчитывается индивидуально",
  },
  {
    icon: Globe,
    title: "Поездки по городу и межгород",
    description: "По всей Украине",
  },
  {
    icon: MousePointerClick,
    title: "Заказ в один клик",
    description: "Нажмите кнопку и позвоните нам!",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="inline-block px-6 py-3 md:py-2 bg-accent/90 backdrop-blur-md rounded-full">
              <p className="text-base md:text-base font-semibold text-accent-foreground flex items-center gap-2 justify-center">
                <Clock className="w-5 h-5 md:w-4 md:h-4" />
                Работаем с 22:00 до 06:00
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight px-4">
              НОЧНОЕ ТАКСИ
              <br />
              <span className="text-primary">ДНЕПР</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto px-4">
              Такси в комендантский час
            </p>

            <div className="space-y-6 pt-8 max-w-4xl mx-auto px-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg min-h-[56px] sm:min-h-[44px] bg-accent border border-accent-border backdrop-blur-md"
                  data-testid="button-call"
                >
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Позвонить
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg min-h-[56px] sm:min-h-[44px] bg-white/10 border-white/30 text-white backdrop-blur-md"
                  data-testid="button-telegram"
                >
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <i className="fab fa-telegram w-5 h-5 mr-2" />
                    Написать
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg min-h-[56px] sm:min-h-[44px] bg-white/10 border-white/30 text-white backdrop-blur-md"
                  data-testid="button-viber"
                >
                  <a
                    href={VIBER_LINK}
                    className="flex items-center justify-center"
                  >
                    <i className="fab fa-viber w-5 h-5 mr-2" />
                    Viber
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="text-sm sm:text-base text-white/80 font-medium">
                  наш телеграм бот
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg min-h-[56px] sm:min-h-[44px] bg-white/10 border-white/30 text-white backdrop-blur-md"
                  data-testid="button-telegram-bot"
                >
                  <a
                    href={TELEGRAM_BOT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <i className="fab fa-telegram w-5 h-5 mr-2" />
                    Заказать в Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center" data-testid="stat-trips">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4">
                <Car className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                1500+
              </div>
              <div className="text-base md:text-lg text-muted-foreground">
                Выполненных поездок
              </div>
            </div>

            <div className="text-center" data-testid="stat-rating">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-full mb-4">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                4.97
              </div>
              <div className="text-base md:text-lg text-muted-foreground">
                Средний рейтинг
              </div>
            </div>

            <div className="text-center" data-testid="stat-clients">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-base md:text-lg text-muted-foreground">
                Довольных клиентов
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              НАШИ ПРЕИМУЩЕСТВА
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Быстрая подача, комфортный автомобиль бизнес-класса с
              кондиционером, доставка еды, лекарств и нужных вещей в любую точку
              города и Украины.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-card border border-card-border rounded-md p-5 sm:p-6 transition-all duration-300"
                data-testid={`card-advantage-${index}`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-1.5 sm:mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${carImage})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            ВЫЗВАТЬ ТАКСИ
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">
            {PHONE_DISPLAY}
          </p>
          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg md:text-xl min-h-[56px] sm:min-h-[44px] w-full sm:w-auto bg-accent border border-accent-border"
            data-testid="button-call-cta"
          >
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              ПОЗВОНИТЬ ПРЯМО СЕЙЧАС
            </a>
          </Button>
        </div>
      </section>

      <footer className="py-8 sm:py-12 bg-card border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-3 sm:mb-4">
                Ночное такси Днепр
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4" />
                Работаем с 22:00 до 06:00
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
                Контакты
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-foreground transition-colors inline-block min-h-[44px] flex items-center"
                  data-testid="link-phone-footer"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                улица Харьковская, 15, Днепр,
                <br />
                Днепропетровская область, 49000
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
                Связаться с нами
              </h3>
              <div className="flex flex-col gap-2.5 sm:gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start min-h-[48px] sm:min-h-[44px] text-sm sm:text-base"
                  data-testid="button-call-footer"
                >
                  <a href={`tel:${PHONE_NUMBER}`} className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Позвонить
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start min-h-[48px] sm:min-h-[44px] text-sm sm:text-base"
                  data-testid="button-telegram-bot-footer"
                >
                  <a
                    href={TELEGRAM_BOT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <i className="fab fa-telegram w-4 h-4 mr-2" />
                    Заказать в Telegram
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start min-h-[48px] sm:min-h-[44px] text-sm sm:text-base"
                  data-testid="button-telegram-footer"
                >
                  <a
                    href={TELEGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <i className="fab fa-telegram w-4 h-4 mr-2" />
                    Написать
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start min-h-[48px] sm:min-h-[44px] text-sm sm:text-base"
                  data-testid="button-viber-footer"
                >
                  <a href={VIBER_LINK} className="flex items-center">
                    <i className="fab fa-viber w-4 h-4 mr-2" />
                    Viber
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-card-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ночное такси Днепр. Все права
              защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
