-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: thuctappython
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',3,'add_permission'),(6,'Can change permission',3,'change_permission'),(7,'Can delete permission',3,'delete_permission'),(8,'Can view permission',3,'view_permission'),(9,'Can add group',2,'add_group'),(10,'Can change group',2,'change_group'),(11,'Can delete group',2,'delete_group'),(12,'Can view group',2,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_user'),(22,'Can change user',6,'change_user'),(23,'Can delete user',6,'delete_user'),(24,'Can view user',6,'view_user'),(25,'Can add category',7,'add_category'),(26,'Can change category',7,'change_category'),(27,'Can delete category',7,'delete_category'),(28,'Can view category',7,'view_category'),(29,'Can add product',8,'add_product'),(30,'Can change product',8,'change_product'),(31,'Can delete product',8,'delete_product'),(32,'Can view product',8,'view_product'),(33,'Can add order',9,'add_order'),(34,'Can change order',9,'change_order'),(35,'Can delete order',9,'delete_order'),(36,'Can view order',9,'view_order'),(37,'Can add order item',10,'add_orderitem'),(38,'Can change order item',10,'change_orderitem'),(39,'Can delete order item',10,'delete_orderitem'),(40,'Can view order item',10,'view_orderitem'),(41,'Can add transfer',12,'add_transfer'),(42,'Can change transfer',12,'change_transfer'),(43,'Can delete transfer',12,'delete_transfer'),(44,'Can view transfer',12,'view_transfer'),(45,'Can add transaction',11,'add_transaction'),(46,'Can change transaction',11,'change_transaction'),(47,'Can delete transaction',11,'delete_transaction'),(48,'Can view transaction',11,'view_transaction'),(49,'Can add Wallet',13,'add_wallet'),(50,'Can change Wallet',13,'change_wallet'),(51,'Can delete Wallet',13,'delete_wallet'),(52,'Can view Wallet',13,'view_wallet');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_category`
--

DROP TABLE IF EXISTS `categories_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_category`
--

LOCK TABLES `categories_category` WRITE;
/*!40000 ALTER TABLE `categories_category` DISABLE KEYS */;
INSERT INTO `categories_category` VALUES (1,'Công nghệ'),(2,'Xa xỉ');
/*!40000 ALTER TABLE `categories_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dj_wallet_transaction`
--

DROP TABLE IF EXISTS `dj_wallet_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dj_wallet_transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `payable_id` int unsigned NOT NULL,
  `uuid` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(64,8) NOT NULL,
  `confirmed` tinyint(1) NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `payable_type_id` int NOT NULL,
  `wallet_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  KEY `dj_wallet_transaction_wallet_id_42cf7145_fk_dj_wallet_wallet_id` (`wallet_id`),
  KEY `dj_wallet_transactio_payable_type_id_446ac159_fk_django_co` (`payable_type_id`),
  CONSTRAINT `dj_wallet_transactio_payable_type_id_446ac159_fk_django_co` FOREIGN KEY (`payable_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `dj_wallet_transaction_wallet_id_42cf7145_fk_dj_wallet_wallet_id` FOREIGN KEY (`wallet_id`) REFERENCES `dj_wallet_wallet` (`id`),
  CONSTRAINT `dj_wallet_transaction_chk_1` CHECK ((`payable_id` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dj_wallet_transaction`
--

LOCK TABLES `dj_wallet_transaction` WRITE;
/*!40000 ALTER TABLE `dj_wallet_transaction` DISABLE KEYS */;
INSERT INTO `dj_wallet_transaction` VALUES (1,1,'0df981056e9246a3bba8f21f52c663d7','deposit',50.00000000,1,'completed','{\"reason\": \"Demo Top-up\"}','2026-04-19 10:18:44.892799','2026-04-19 10:18:44.892814',13,1),(2,1,'49b721b35bbb4f6ebd7fe02e1c2c9da5','deposit',100.00000000,1,'completed','{}','2026-04-19 16:32:57.334557','2026-04-19 16:32:57.334580',13,1),(3,1,'7f9fa188c3bf424d9b449af06db35b01','withdraw',30.00000000,1,'completed','{}','2026-04-19 16:35:11.488681','2026-04-19 16:35:11.488699',13,1);
/*!40000 ALTER TABLE `dj_wallet_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dj_wallet_transfer`
--

DROP TABLE IF EXISTS `dj_wallet_transfer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dj_wallet_transfer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `from_id` int unsigned NOT NULL,
  `to_id` int unsigned NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` decimal(64,8) NOT NULL,
  `fee` decimal(64,8) NOT NULL,
  `uuid` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `deposit_id` bigint NOT NULL,
  `from_type_id` int NOT NULL,
  `to_type_id` int NOT NULL,
  `withdraw_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  KEY `dj_wallet_transfer_deposit_id_256846d5_fk_dj_wallet` (`deposit_id`),
  KEY `dj_wallet_transfer_from_type_id_2f6ef8db_fk_django_co` (`from_type_id`),
  KEY `dj_wallet_transfer_to_type_id_9cb7ba1f_fk_django_content_type_id` (`to_type_id`),
  KEY `dj_wallet_transfer_withdraw_id_362a688a_fk_dj_wallet` (`withdraw_id`),
  CONSTRAINT `dj_wallet_transfer_deposit_id_256846d5_fk_dj_wallet` FOREIGN KEY (`deposit_id`) REFERENCES `dj_wallet_transaction` (`id`),
  CONSTRAINT `dj_wallet_transfer_from_type_id_2f6ef8db_fk_django_co` FOREIGN KEY (`from_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `dj_wallet_transfer_to_type_id_9cb7ba1f_fk_django_content_type_id` FOREIGN KEY (`to_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `dj_wallet_transfer_withdraw_id_362a688a_fk_dj_wallet` FOREIGN KEY (`withdraw_id`) REFERENCES `dj_wallet_transaction` (`id`),
  CONSTRAINT `dj_wallet_transfer_chk_1` CHECK ((`from_id` >= 0)),
  CONSTRAINT `dj_wallet_transfer_chk_2` CHECK ((`to_id` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dj_wallet_transfer`
--

LOCK TABLES `dj_wallet_transfer` WRITE;
/*!40000 ALTER TABLE `dj_wallet_transfer` DISABLE KEYS */;
/*!40000 ALTER TABLE `dj_wallet_transfer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dj_wallet_wallet`
--

DROP TABLE IF EXISTS `dj_wallet_wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dj_wallet_wallet` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `holder_id` int unsigned NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` decimal(64,8) NOT NULL,
  `decimal_places` smallint unsigned NOT NULL,
  `is_frozen` tinyint(1) NOT NULL,
  `frozen_at` datetime(6) DEFAULT NULL,
  `frozen_reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta` json DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `holder_type_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  UNIQUE KEY `dj_wallet_wallet_holder_type_id_holder_id_slug_bb08337d_uniq` (`holder_type_id`,`holder_id`,`slug`),
  KEY `dj_wallet_wallet_slug_012809f4` (`slug`),
  CONSTRAINT `dj_wallet_wallet_holder_type_id_1eaa2001_fk_django_co` FOREIGN KEY (`holder_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `dj_wallet_wallet_chk_1` CHECK ((`holder_id` >= 0)),
  CONSTRAINT `dj_wallet_wallet_chk_2` CHECK ((`decimal_places` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dj_wallet_wallet`
--

LOCK TABLES `dj_wallet_wallet` WRITE;
/*!40000 ALTER TABLE `dj_wallet_wallet` DISABLE KEYS */;
INSERT INTO `dj_wallet_wallet` VALUES (1,1,'default','3c19659fbaaf405eaeac5461e4d6b283',120.00000000,8,0,NULL,'','{}','2026-04-19 09:42:26.042172','2026-04-19 16:35:11.489173',6),(2,2,'default','130f1d3629384a89a99352eac5c818fe',0.00000000,8,0,NULL,'','{}','2026-04-19 09:42:26.076551','2026-04-19 09:42:26.076565',6);
/*!40000 ALTER TABLE `dj_wallet_wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8mb4_unicode_ci,
  `object_repr` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_users_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2026-04-19 10:29:53.597190','4','Louis Vuitton Bag',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',8,1),(2,'2026-04-19 10:29:53.606742','3','Rolex Submariner',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',8,1),(3,'2026-04-19 10:29:53.608013','2','MacBook Pro M3',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',8,1),(4,'2026-04-19 10:29:53.608983','1','iPhone 15 Pro Max',2,'[{\"changed\": {\"fields\": [\"Price\"]}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(2,'auth','group'),(3,'auth','permission'),(7,'categories','category'),(4,'contenttypes','contenttype'),(11,'dj_wallet','transaction'),(12,'dj_wallet','transfer'),(13,'dj_wallet','wallet'),(9,'orders','order'),(10,'orders','orderitem'),(8,'products','product'),(5,'sessions','session'),(6,'users','user');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2026-04-15 18:02:08.983573'),(2,'contenttypes','0002_remove_content_type_name','2026-04-15 18:02:10.107698'),(3,'auth','0001_initial','2026-04-15 18:02:13.844851'),(4,'auth','0002_alter_permission_name_max_length','2026-04-15 18:02:14.567668'),(5,'auth','0003_alter_user_email_max_length','2026-04-15 18:02:14.622357'),(6,'auth','0004_alter_user_username_opts','2026-04-15 18:02:14.653077'),(7,'auth','0005_alter_user_last_login_null','2026-04-15 18:02:14.686051'),(8,'auth','0006_require_contenttypes_0002','2026-04-15 18:02:14.720405'),(9,'auth','0007_alter_validators_add_error_messages','2026-04-15 18:02:14.754882'),(10,'auth','0008_alter_user_username_max_length','2026-04-15 18:02:14.788702'),(11,'auth','0009_alter_user_last_name_max_length','2026-04-15 18:02:14.826130'),(12,'auth','0010_alter_group_name_max_length','2026-04-15 18:02:14.983008'),(13,'auth','0011_update_proxy_permissions','2026-04-15 18:02:15.028478'),(14,'auth','0012_alter_user_first_name_max_length','2026-04-15 18:02:15.069368'),(15,'users','0001_initial','2026-04-15 18:02:18.689066'),(16,'admin','0001_initial','2026-04-15 18:02:20.590229'),(17,'admin','0002_logentry_remove_auto_add','2026-04-15 18:02:20.631864'),(18,'admin','0003_logentry_add_action_flag_choices','2026-04-15 18:02:20.674850'),(19,'categories','0001_initial','2026-04-15 18:02:21.028822'),(20,'products','0001_initial','2026-04-15 18:02:21.923001'),(21,'orders','0001_initial','2026-04-15 18:02:22.374571'),(22,'orders','0002_initial','2026-04-15 18:02:24.354366'),(23,'products','0002_initial','2026-04-15 18:02:24.982983'),(24,'sessions','0001_initial','2026-04-15 18:02:25.472633'),(25,'dj_wallet','0001_initial','2026-04-19 09:26:08.989627'),(26,'users','0002_user_reward_points','2026-04-19 16:20:59.048306');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('ko4n9nalgnes887m0nkp7lrpepuiiy3f','.eJxVjDEKAyEQRe9iHURFGU2ZPmcQnRnjJkFh3a2W3D0IWyTtf-_9Q8S0bzXug9e4kLgKLS6_W0744jYBPVN7dIm9beuS5VTkSYe8d-L37XT_DmoaddY-21CgsIFiVfDKairKeAsGs1c6kw-ADhxorZEMeE7oLCMVLiYE8fkC2bo37w:1wD58N:ZZpzyOS2Cmn00zGA4G4ZV75Uc1y9CLGnvZ6Z2u5NOc8','2026-04-29 18:38:43.265873'),('rra2wkeqqvryicih8ty0il1gzwlpbxzx','.eJxVjDEKAyEQRe9iHURFGU2ZPmcQnRnjJkFh3a2W3D0IWyTtf-_9Q8S0bzXug9e4kLgKLS6_W0744jYBPVN7dIm9beuS5VTkSYe8d-L37XT_DmoaddY-21CgsIFiVfDKairKeAsGs1c6kw-ADhxorZEMeE7oLCMVLiYE8fkC2bo37w:1wD4vY:SltNYq-NZhGFZM8WnFhvb9cw0WbI8aLbZrCTKktUqZc','2026-04-29 18:25:28.461820');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_order`
--

DROP TABLE IF EXISTS `orders_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `total_price` decimal(10,2) NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_order_user_id_e9b59eb1_fk_users_user_id` (`user_id`),
  CONSTRAINT `orders_order_user_id_e9b59eb1_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_order`
--

LOCK TABLES `orders_order` WRITE;
/*!40000 ALTER TABLE `orders_order` DISABLE KEYS */;
INSERT INTO `orders_order` VALUES (1,1099.00,'PAID','2026-04-15 18:28:26.018238','2026-04-15 18:28:26.018260',2),(2,16099.00,'PENDING','2026-04-15 18:28:26.085310','2026-04-15 18:28:26.085326',2);
/*!40000 ALTER TABLE `orders_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_orderitem`
--

DROP TABLE IF EXISTS `orders_orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_orderitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL,
  `quantity` int unsigned NOT NULL,
  `order_id` bigint NOT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_orderitem_order_id_fe61a34d_fk_orders_order_id` (`order_id`),
  KEY `orders_orderitem_product_id_afe4254a_fk_products_product_id` (`product_id`),
  CONSTRAINT `orders_orderitem_order_id_fe61a34d_fk_orders_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders_order` (`id`),
  CONSTRAINT `orders_orderitem_product_id_afe4254a_fk_products_product_id` FOREIGN KEY (`product_id`) REFERENCES `products_product` (`id`),
  CONSTRAINT `orders_orderitem_chk_1` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_orderitem`
--

LOCK TABLES `orders_orderitem` WRITE;
/*!40000 ALTER TABLE `orders_orderitem` DISABLE KEYS */;
INSERT INTO `orders_orderitem` VALUES (1,1099.00,1,1,1),(2,1099.00,1,2,1),(3,15000.00,1,2,3);
/*!40000 ALTER TABLE `orders_orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_product`
--

DROP TABLE IF EXISTS `products_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `category_id` bigint NOT NULL,
  `seller_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_product_category_id_9b594869_fk_categories_category_id` (`category_id`),
  KEY `products_product_seller_id_07afb1e3_fk_users_user_id` (`seller_id`),
  CONSTRAINT `products_product_category_id_9b594869_fk_categories_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories_category` (`id`),
  CONSTRAINT `products_product_seller_id_07afb1e3_fk_users_user_id` FOREIGN KEY (`seller_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_product`
--

LOCK TABLES `products_product` WRITE;
/*!40000 ALTER TABLE `products_product` DISABLE KEYS */;
INSERT INTO `products_product` VALUES (1,'iPhone 15 Pro Max',5.00,10,'','2026-04-15 18:02:46.237658','2026-04-19 10:29:53.608469',1,1),(2,'MacBook Pro M3',2.00,5,'','2026-04-15 18:02:46.268652','2026-04-19 10:29:53.607389',1,1),(3,'Rolex Submariner',1.50,2,'','2026-04-15 18:02:46.304297','2026-04-19 10:29:53.605588',2,1),(4,'Louis Vuitton Bag',3.50,3,'','2026-04-15 18:02:46.336100','2026-04-19 10:29:53.595790',2,1);
/*!40000 ALTER TABLE `products_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user`
--

DROP TABLE IF EXISTS `users_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `role` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reward_points` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user`
--

LOCK TABLES `users_user` WRITE;
/*!40000 ALTER TABLE `users_user` DISABLE KEYS */;
INSERT INTO `users_user` VALUES (1,'pbkdf2_sha256$1200000$Hwupo2O15OmFwniV9QKCXb$c8Jw/CWi9+yd/ReBQJfSILuO9v2kxsghHA8QSDJxwB0=','2026-04-15 18:38:43.219494',1,'admin','','','admin@example.com',1,1,'2026-04-15 18:02:44.903148','ADMIN',1000),(2,'pbkdf2_sha256$1200000$jVFwNE6G535sSMKImTMDjN$KEn/hZnLVWyPq55yz/ivOABt5oQ3J316JZTZogiO7wE=',NULL,0,'user','','','user@example.com',0,1,'2026-04-15 18:02:45.636253','USER',0);
/*!40000 ALTER TABLE `users_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user_groups`
--

DROP TABLE IF EXISTS `users_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_groups_user_id_group_id_b88eab82_uniq` (`user_id`,`group_id`),
  KEY `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` (`group_id`),
  CONSTRAINT `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `users_user_groups_user_id_5f6f5a90_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user_groups`
--

LOCK TABLES `users_user_groups` WRITE;
/*!40000 ALTER TABLE `users_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_user_user_permissions`
--

DROP TABLE IF EXISTS `users_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_user_permissions_user_id_permission_id_43338c45_uniq` (`user_id`,`permission_id`),
  KEY `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `users_user_user_permissions_user_id_20aca447_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_user_user_permissions`
--

LOCK TABLES `users_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `users_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-20  7:49:15
