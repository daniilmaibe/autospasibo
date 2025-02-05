-- phpMyAdmin SQL Dump
-- version 5.2.1-1.el8
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 05 2025 г., 15:03
-- Версия сервера: 10.4.33-MariaDB-cll-lve-log
-- Версия PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `autospasibo`
--
CREATE DATABASE IF NOT EXISTS `autospasibo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `autospasibo`;

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `car_number` varchar(20) NOT NULL,
  `rating` int(11) NOT NULL,
  `review_text` text DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `car_number`, `rating`, `review_text`, `ts`) VALUES
(19, 'А342ВК790', 1, 'Встал на тротуаре', '2024-03-14 20:28:33'),
(20, 'У212УУ67', 3, 'Неправильная парковка, перекрыл парковку для инвалидов!!!', '2024-03-14 20:28:33'),
(22, 'Р575МС161', 4, 'Встал колесом на тротуаре', '2024-03-14 20:28:33'),
(23, 'У316ВС47', 3, 'Загородил выезд', '2024-03-14 20:28:33'),
(24, 'В965СХ77', 2, 'встал прям на повороте не проехать', '2024-03-14 20:28:33'),
(25, 'К536КУ196', 1, 'по встречке поехал, пока все стояли в пробке\n', '2024-03-14 20:28:33'),
(29, 'А342ВК790', 3, 'парковка на тротуаре', '2024-03-14 20:28:33'),
(30, 'м008ум68', 3, 'Парковка пустая ,очень некрасиво парковаться на тротуаре!', '2024-03-14 20:28:33'),
(31, 'н464ес68', 3, 'Парковка около подъезда', '2024-03-14 20:28:33'),
(32, 'Р425ВЕ68', 3, 'На тротуаре в гололед', '2024-03-14 20:28:33'),
(33, 'В744СМ82', 10, 'сам остановился и предложил свою помощь, хоть и ехал по своим делам, большое спасибо тебе', '2024-03-14 20:28:33'),
(34, 'М823вм29', 2, 'подпëр мою водительскую дверь за то, что я поставил свой автомобиль якобы на \"его парковочном месте\"', '2024-03-14 20:28:33'),
(35, 'В966ТВ134', 1, 'Подпер машины на Арбате и ушёл по своим делам. Ни записки, ни номера. Что за люди, поражаюсь...', '2024-03-14 20:28:33'),
(36, 'в887оо33', 10, 'пропустил по длинной дворовой дороге в снег', '2024-03-14 20:28:33'),
(37, 'Н194ВН82', 2, 'Парковка на тротуаре.', '2024-03-14 20:31:41'),
(38, 'В340ВМ92', 2, 'Парковка для инвалида.', '2024-03-14 20:32:18'),
(39, 'а479рх92', 1, 'на тротуаре', '2024-03-14 20:32:52'),
(40, 'М022ММ90', 1, 'По встречке объезжал пробку', '2024-03-18 20:30:15'),
(41, 'н511но790', 2, 'перекрыл тротуар', '2024-08-09 11:52:52');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
