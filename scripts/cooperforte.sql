-- MySQL dump 10.13  Distrib 5.7.23, for Win64 (x86_64)
--
-- Host: localhost    Database: cooperforte
-- ------------------------------------------------------
-- Server version	5.7.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) NOT NULL,
  `client_cpf` varchar(11) NOT NULL,
  `client_cep` varchar(8) NOT NULL,
  `client_logradouro` varchar(255) NOT NULL,
  `client_bairro` varchar(255) NOT NULL,
  `client_cidade` varchar(255) NOT NULL,
  `client_uf` varchar(255) NOT NULL,
  `client_complemento` varchar(45) DEFAULT NULL,
  `st_active` char(1) NOT NULL DEFAULT '1',
  `st_registry_active` enum('N','S') NOT NULL DEFAULT 'S',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients_contacts`
--

DROP TABLE IF EXISTS `clients_contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clients_id` int(11) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `contact_type` enum('RE','CO','CE') NOT NULL COMMENT 'RE = Residencial\nCO = Comercial\nCE = Celular',
  `st_active` char(1) NOT NULL DEFAULT '1',
  `st_registry_active` enum('S','N') NOT NULL DEFAULT 'S',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients_contacts`
--

LOCK TABLES `clients_contacts` WRITE;
/*!40000 ALTER TABLE `clients_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients_contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients_emails`
--

DROP TABLE IF EXISTS `clients_emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients_emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clients_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `st_active` char(1) NOT NULL DEFAULT '1',
  `st_registry_active` enum('S','N') NOT NULL DEFAULT 'S',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients_emails`
--

LOCK TABLES `clients_emails` WRITE;
/*!40000 ALTER TABLE `clients_emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `role_name` varchar(45) NOT NULL,
  `st_active` char(1) NOT NULL DEFAULT '1',
  `st_registry_active` enum('S','N') NOT NULL DEFAULT 'S',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,1,'Admin','1','S','2019-11-22 21:54:50','2019-11-22 21:54:50'),(2,2,'Comum','1','S','2019-11-22 21:54:50','2019-11-22 21:54:50');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_avatar` longtext,
  `user_username` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  `st_active` char(1) DEFAULT '1',
  `st_registry_active` enum('N','S') DEFAULT 'S',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'https://htmlstream.com/preview/unify-v2.5.1/assets/img-temp/400x450/img5.jpg','admin','admin@gmail.com','123456','1','S','2019-11-22 21:49:12','2019-11-22 21:49:12'),(2,'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg','comum','comum@gmail.com','123456','1','S','2019-11-22 21:49:12','2019-11-22 21:49:12');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cooperforte'
--
/*!50003 DROP FUNCTION IF EXISTS `MASK` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `MASK`(val VARCHAR(100), mask VARCHAR(100)) RETURNS varchar(100) CHARSET utf8
    DETERMINISTIC
BEGIN
 DECLARE maskared VARCHAR(100) DEFAULT "";
 DECLARE k INT DEFAULT 0;
 DECLARE i INT DEFAULT 0;
 WHILE i < CHAR_LENGTH(mask) DO
  SET i = i + 1;
  IF SUBSTRING(mask, i, 1) = '#' THEN
   IF k < CHAR_LENGTH(val) THEN
    SET k = k+1;
    SET maskared = CONCAT(maskared, SUBSTRING(val, k, 1));
   END IF;
  ELSE
   IF i < CHAR_LENGTH(mask) THEN
    SET maskared = CONCAT(maskared, SUBSTRING(mask, i, 1));
            END IF;
        END IF;
 END WHILE;
 RETURN maskared;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-25 13:31:23
