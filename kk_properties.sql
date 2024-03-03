-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2024 at 07:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kk_properties`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

-- CREATE TABLE `contact_us` (
--   `contactus_id` int(11) NOT NULL,
--   `name` varchar(150) NOT NULL,
--   `contact` varchar(10) NOT NULL,
--   `doubts` text NOT NULL,
--   `entry_date` datetime NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

-- INSERT INTO `contact_us` (`contactus_id`, `name`, `contact`, `doubts`, `entry_date`) VALUES
-- (1, 'kk', '1111111111', 'ttttt', '2024-01-21 17:27:09');

-- --------------------------------------------------------

--
-- Table structure for table `mst_admin`
--

CREATE TABLE `mst_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(150) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_contact` varchar(10) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mst_admin`
--

INSERT INTO `mst_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_contact`, `password`) VALUES
(1, 'kk', 'kk@kk.com', '1111111111', '123');

-- --------------------------------------------------------

--
-- Table structure for table `mst_user`
--

CREATE TABLE `mst_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `profile` text NOT NULL,
  `user_contact` varchar(10) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `status` int(1) NOT NULL,
  `entry_date` datetime NOT NULL,
  `update_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mst_user`
--

INSERT INTO `mst_user` (`user_id`, `user_name`, `profile`, `user_contact`, `user_email`, `password`, `status`, `entry_date`, `update_date`) VALUES
(1, 'hk', '', '2222222222', 'hk@kk.com', '123', 1, '2024-01-21 17:33:08', '2024-01-21 17:33:08');

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `property_id` int(11) NOT NULL,
  `property_name` varchar(100) NOT NULL,
  `property_type` int(1) NOT NULL,
  `img` text NOT NULL,
  `description` text NOT NULL,
  `tags` text NOT NULL,
  `location` varchar(20) NOT NULL,
  `user_id` int(4) NOT NULL,
  `status` int(1) NOT NULL,
  `entry_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `property_price` bigint(10) NOT NULL,
  `type` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `property_name`, `property_type`, `img`, `description`, `tags`, `location`, `user_id`, `status`, `entry_date`, `update_date`, `property_price`, `type`) VALUES
(1, 'flat', 1, '', 'onwdfvbij', 'ghar', 'chitra', 1, 1, '2024-01-21 17:35:04', '2024-01-21 17:35:04', 1000000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
-- ALTER TABLE `contact_us`
--   ADD PRIMARY KEY (`contactus_id`);

--
-- Indexes for table `mst_admin`
--
ALTER TABLE `mst_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `mst_user`
--
ALTER TABLE `mst_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contactus_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mst_admin`
--
ALTER TABLE `mst_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mst_user`
--
ALTER TABLE `mst_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
