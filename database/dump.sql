--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Funko Pop!Phantom Assassin	997	/images/PA-dota2.png	From dota 2, Phantom assassin with sword, as a stylized pop vinyl from Funko!	From dota 2, Phantom assassin with sword, as a stylized pop vinyl from Funko! figure stands 3 3/4 inches and comes in a window display box. Check out the other dota 2 figures from Funko! collect them all!
2	Funko Pop! Pudge	1099	/images/Pudge-dota2.png	From dota 2, pudge with cleaver, as a stylized pop vinyl from Funko!	From dota 2, Pudge with cleaver, as a stylized pop vinyl from Funko! figure stands 3 3/4 inches and comes in a window display box. Check out the other dota 2 figures from Funko! collect them all!
3	Adult Latex Juggernaut Mask	4398	/images/juggMask.jpg	Take the role of your favorite DOTA 2 character with this high-end latex mask!	Take the role of your favorite DOTA 2 character with this high-end latex mask! Mask of the Juggernaut comes with yellow mirrored eyeshades. Shipped in polybag. Officially licensed. Sure to make a great gift for any DOTA 2 fan!
4	Meepo Cowl Costume Beanie	1999	/images/meepoBeanie.jpg	Hood is constructed from a Jersey Knit Poly/Cotton blend. Ears are Velboa, a super soft acrylic fabric.	DOTA 2 MEEPO COWL COSTUME HAT BEANIE COSPLAY. Have you ever thought, "Man I really need 2 or 3 more copies of myself so I can field my on DOTA 2 team"? Now you kinda can! With our Meepo Cowl you can now feel like a clone of yourself! Multiply your effectiveness by the power of you! Disclaimer: Meepo Cowl does not grant the ability to teleport.
5	Mirana Nendoroid Action Figure	4699	/images/miranaDota2.jpg	A Good Smile import from the game Dota 2 with numerous posing options	From Good Smile From Valve popular game DOTA 2 comes a Nendoroid of the Princess of the Moon who rides on her enormous feline familiar: Mirana! Her arms feature more articulation than most standard Nendoroid, allowing her to be posed aiming her beautiful bow at her enemies. Her neck is also articulated allowing you to create various different nuances when putting her on display. Her feline mount Morcant is included as an optional part to stand by her side! Enjoy the very first of the DOTA 2 Nendoroid in your collection! Purchases of this product will include bonus Comic Card illustrated by Yuko Osada and digital unlock code for an in-game item.
6	SteelSeries Arctis 5 Dota 2	12999	/images/arctis5dota2.jpg	The limited edition Arctis 5 features Dota 2 character artwork by acclaimed Community Contributor,	The limited edition exterior features a special Dota 2-themed design, and the Arctis 5 underneath brings all the features that gamers have come to expect from the Arctis line. The Arctis 5 Dota 2 Edition is incredibly comfortable with its unique ski-goggle suspension headband, customized with the Dota 2 logo, and keeps gamers cool with its AirWeave ear cushions. The headset features the SteelSeries ClearCast Microphone, the best mic in gaming, DTS Headphone:X 7.1 surround sound, and PrismSync RGB illumination, all controlled through SteelSeries Engine.
7	Rival 600 Dota2 Edition	8999	/images/mousedota2.jpg	Official Dota 2 licensed mouse features the doodle design of community artist Ced Alcalde	SteelSeries teamed up with Valve to develop the limited Dota 2 edition Rival 600 featuring a design by community artist Ced Alcalde.  The dual-sensor system combines true 1 to 1 tracking with breakthrough state-of-the art lift off distance detection.  Rival 600 also features an exclusive custom center-of-gravity tuning system with 256 weight configurations and a customizable range from 96g to 128g, ensuring the perfect weight and balance for everyone.  SteelSeries Engine software unlocks an impressive arsenal of Engine Apps that make customization easy and intuitive.(keyboard,headset and dota2 skill does not include!)
8	Dota 2 Pudge Latex Mask 	4399	/images/PudgeMask.jpg	Mask of Pudge shows his green hair and grim expression, as well as the stitches that hold together his face.	Take the role of your favorite DOTA 2 character with this high-end latex mask! Mask of Pudge shows his green hair and grim expression, as well as the stitches that hold together his face. Includes an ingame code for a Treasure of the Shattered Hourglass. Shipped in polybag. Officially licensed. Sure to make a great gift for any DOTA 2 fan!
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 88, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 49, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 6, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 8, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

