-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2024 at 07:12 AM
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
-- Table structure for table `meet_req`
--

CREATE TABLE `meet_req` (
  `mr_id` bigint(20) NOT NULL,
  `user_id` bigint(5) NOT NULL,
  `property_id` bigint(5) NOT NULL,
  `dealer_id` bigint(5) NOT NULL,
  `meet_date` date NOT NULL,
  `entry_date` date NOT NULL,
  `status` int(1) NOT NULL COMMENT '0=not accepted, 1=accepted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meet_req`
--

INSERT INTO `meet_req` (`mr_id`, `user_id`, `property_id`, `dealer_id`, `meet_date`, `entry_date`, `status`) VALUES
(1, 5, 1, 1, '2024-04-18', '2024-04-17', 0),
(2, 5, 2, 2, '2024-04-30', '2024-04-17', 0),
(3, 5, 3, 2, '2024-04-30', '2024-04-17', 1),
(4, 5, 2, 2, '0000-00-00', '2024-04-17', 1),
(5, 5, 1, 1, '2024-04-17', '2024-04-17', 0),
(6, 5, 1, 1, '2024-04-17', '2024-04-17', 1),
(7, 5, 1, 1, '2024-04-30', '2024-04-24', 0),
(8, 5, 1, 1, '2024-04-27', '2024-04-25', 0);

-- --------------------------------------------------------

--
-- Table structure for table `mst_admin`
--

CREATE TABLE `mst_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(150) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mst_admin`
--

INSERT INTO `mst_admin` (`admin_id`, `admin_name`, `admin_email`, `contact`, `password`) VALUES
(1, 'kk', 'kk@kk.com', '1111111111', '123');

-- --------------------------------------------------------

--
-- Table structure for table `mst_dealer`
--

CREATE TABLE `mst_dealer` (
  `dealer_id` int(11) NOT NULL,
  `acc_name` varchar(50) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `img` text NOT NULL,
  `contact` varchar(10) NOT NULL,
  `dealer_email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `status` int(1) NOT NULL,
  `update_date` datetime NOT NULL,
  `entry_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mst_dealer`
--

INSERT INTO `mst_dealer` (`dealer_id`, `acc_name`, `full_name`, `img`, `contact`, `dealer_email`, `password`, `city`, `state`, `status`, `update_date`, `entry_date`) VALUES
(1, 'kuldipsinh', 'Kuldipsinh Gohil', 'WhatsApp Image 2024-01-21 at 10.28.16 PM.jpeg1708854066721', '2222222222', 'kuldipsinh2200@gmail.com', '123', 'Bhavnagar', 'Gujarat', 1, '0000-00-00 00:00:00', '2024-02-25 15:11:06'),
(2, 'Karmrajsinh', 'Karmrajsinh Gohil', 'WhatsApp Image 2024-04-25 at 10.08.08 AM.jpeg1714020994245', '3333333333', 'karmaa@gmail.com', '123', 'Bhavnagar', 'Gujarat', 1, '2024-04-25 10:26:34', '2024-02-25 15:13:20');

-- --------------------------------------------------------

--
-- Table structure for table `mst_user`
--

CREATE TABLE `mst_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `img` text NOT NULL,
  `contact` varchar(10) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `status` int(1) NOT NULL,
  `entry_date` datetime NOT NULL,
  `update_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mst_user`
--

INSERT INTO `mst_user` (`user_id`, `user_name`, `img`, `contact`, `user_email`, `password`, `city`, `state`, `status`, `entry_date`, `update_date`) VALUES
(5, 'Kuldipsinh Gohil', 'WhatsApp Image 2024-01-21 at 10.28.16 PM.jpeg1713425080802', '7878787879', 'kuldipsinh2200@gmail.com', '123', 'Kadiyabid1', 'Bhavnagar', 1, '2024-03-05 02:49:11', '2024-04-18 12:54:40'),
(6, 'Karmrajsinh Gohil', 'WhatsApp Image 2024-04-25 at 10.08.08 AM.jpeg1714020974822', '7878787878', 'Karmrajsinh@gmail.com', '123', 'Bhavnagar', 'Gujarat', 1, '2024-04-25 03:07:00', '2024-04-25 10:26:14');

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `property_id` int(11) NOT NULL,
  `property_name` varchar(100) NOT NULL,
  `property_type` int(1) NOT NULL,
  `p_img` text NOT NULL,
  `bedrooms` int(4) NOT NULL,
  `bathrooms` int(4) NOT NULL,
  `sqft` bigint(10) NOT NULL,
  `description` text NOT NULL,
  `tags` text NOT NULL,
  `location` varchar(20) NOT NULL,
  `dealer_id` int(4) NOT NULL,
  `status` int(1) NOT NULL,
  `entry_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,
  `property_price` bigint(10) NOT NULL,
  `type` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `property_name`, `property_type`, `p_img`, `bedrooms`, `bathrooms`, `sqft`, `description`, `tags`, `location`, `dealer_id`, `status`, `entry_date`, `update_date`, `property_price`, `type`) VALUES
(1, 'Royal VILLA', 1, 'villa1.jpg1708854655345', 2, 3, 1500, 'A cozy 2-bedroom, 2-bath condo located in a vibrant gated community. Covering 1,100 sq ft, this property offers access to a community pool, a private balcony, and is ideal for those seeking a low-maintenance lifestyle.', 'villa royalvilla BHavnagar', 'Bhavnagar111', 1, 0, '2024-02-25 15:20:55', '2024-04-25 10:37:29', 100000000, 1),
(2, 'Rich Villa', 1, 'villa3.jpg1708855405460', 3, 4, 1500, 'Modern 3-bedroom, 2.5-bath townhouse with 1,800 sq ft of space. Built in 2010, it features energy-efficient appliances, hardwood floors, and a private driveway, making it a great option for environmentally conscious buyers.', 'villa royal rich ', 'Bhavnagar', 2, 1, '2024-02-25 15:33:25', '2024-04-25 10:36:01', 100000000, 1),
(7, 'Single-family home', 1, '978033-mansion-house-architecture-luxury-building-design.jpg1714021198743', 4, 3, 1500, 'This charming 4-bedroom, 2.5-bath home features 2,500 sq ft of living space on a quarter-acre lot. Built in 1995, it includes amenities such as an attached garage, central air conditioning, and a spacious backyard deck perfect for entertaining.', 'Royal Big', '123 Maple Drive, Spr', 1, 1, '2024-04-25 10:29:58', '0000-00-00 00:00:00', 1500000, 1),
(8, 'Luxury apartment', 1, 'real-estate-home-exterior-6-1760-1000.jpg1714021473539', 3, 3, 2200, 'Luxurious 3-bedroom, 3-bath apartment offering panoramic ocean views and 2,200 sq ft of sophisticated living space. This 2018-built high-rise includes exclusive amenities such as a modern gym and a rooftop pool.', 'Royall', '101 Birch Lane, Miam', 2, 1, '2024-04-25 10:34:33', '2024-04-25 10:37:04', 200000000, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meet_req`
--
ALTER TABLE `meet_req`
  ADD PRIMARY KEY (`mr_id`);

--
-- Indexes for table `mst_dealer`
--
ALTER TABLE `mst_dealer`
  ADD PRIMARY KEY (`dealer_id`),
  ADD UNIQUE KEY `acc_name` (`acc_name`);

--
-- Indexes for table `mst_user`
--
ALTER TABLE `mst_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meet_req`
--
ALTER TABLE `meet_req`
  MODIFY `mr_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `mst_dealer`
--
ALTER TABLE `mst_dealer`
  MODIFY `dealer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mst_user`
--
ALTER TABLE `mst_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
