# Vacancy Tracker - Copilot Instructions

## Project Overview
Полнофункциональное веб-приложение для отслеживания откликов на вакансии с аналитикой, фильтрами и поддержкой темизации.

## Tech Stack
- Frontend: React 18 + TypeScript
- Styling: Tailwind CSS
- Charts: Recharts
- Routing: React Router v6
- Build: Vite
- Storage: Local Storage (Supabase ready)

## Project Structure
- `/src/components/` - React компоненты (Header, Navigation, Forms, Charts)
- `/src/pages/` - Страницы приложения (Vacancies, Add, Analytics)
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Утилиты и функции
- `/src/types/` - TypeScript типы

## Development Guidelines
- Используйте Tailwind CSS для стилизации
- Следуйте структуре папок
- Используйте TypeScript for type safety
- Компоненты должны быть функциональными (hooks based)
- Поддерживайте как светлую, так и тёмную тему

## Available Scripts
- `npm run dev` - Запуск dev сервера
- `npm run build` - Сборка для продакшена
- `npm run preview` - Предпросмотр сборки
- `npm run lint` - Проверка кода

## Integration with Supabase
Приложение готово к интеграции с Supabase. Для подключения:
1. Создайте проект в Supabase
2. Замените Local Storage calls на Supabase API calls в `src/lib/storage.ts`
3. Используйте `@supabase/supabase-js` library
