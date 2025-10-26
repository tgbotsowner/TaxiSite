# Ночное Такси Днепр - Landing Page

## Overview
Одностраничный лендинг для службы ночного такси в Днепре. Сайт предоставляет информацию о услугах и несколько способов связи с компанией.

## Contact Information
- **Телефон**: +380 777 799 989
- **Часы работы**: 22:00 - 06:00
- **Адрес**: улица Харьковская, 15, Днепр, Днепропетровская область, 49000

## Contact Methods
- Телефонный звонок (tel: link)
- Telegram бот для заказа (https://t.me/TaxiDnepr_24_7_bot)
- Telegram чат (https://t.me/+380777799989)
- Viber (viber://chat?number=+380777799989)

## Features
1. **Hero Section**: Полноэкранная секция с фоновым изображением красного автомобиля, заголовком и четырьмя кнопками связи (Позвонить, Заказать в Telegram, Написать в Telegram, Viber)
2. **Advantages Section**: Сетка из 7 преимуществ с иконками
3. **CTA Section**: Призыв к действию с крупной кнопкой вызова
4. **Footer**: Контактная информация и дополнительные способы связи

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Styling**: Dark theme with red and yellow accents
- **Icons**: Lucide React + Font Awesome (для Telegram и Viber)
- **Backend**: Express.js (serves static files)

## Design System
- **Primary Color**: Красный (под цвет автомобиля в hero image)
- **Accent Color**: Желтый/Золотой (для CTA кнопок)
- **Typography**: Montserrat (заголовки), Inter (текст)
- **Theme**: Темная цветовая схема

## Project Structure
```
client/
  src/
    pages/
      home.tsx         # Главная страница со всеми секциями
    components/ui/     # Shadcn UI компоненты
attached_assets/
  photo_2025-10-26_15-30-58_1761485468561.jpg  # Hero image
```

## Recent Changes
- 2025-10-26: Initial project setup with landing page
- SEO meta tags added for search optimization
- Responsive design for mobile devices
- Multiple contact methods (Phone, Telegram, Viber)
