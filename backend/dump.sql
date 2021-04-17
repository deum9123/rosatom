--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3 (Debian 10.3-1.pgdg90+1)
-- Dumped by pg_dump version 10.3 (Debian 10.3-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY "public"."userdb" DROP CONSTRAINT IF EXISTS "userdb_pkey";
ALTER TABLE IF EXISTS ONLY "public"."question_catalog" DROP CONSTRAINT IF EXISTS "question_catalog_pkey";
ALTER TABLE IF EXISTS ONLY "public"."ivent_catalog" DROP CONSTRAINT IF EXISTS "ivent_catalog_pkey";
ALTER TABLE IF EXISTS ONLY "public"."island_task_catalog" DROP CONSTRAINT IF EXISTS "island_task_catalog_pkey";
ALTER TABLE IF EXISTS ONLY "public"."island_catalog" DROP CONSTRAINT IF EXISTS "island_catalog_pkey";
ALTER TABLE IF EXISTS ONLY "public"."company_catalog" DROP CONSTRAINT IF EXISTS "company_catalog_pkey";
ALTER TABLE IF EXISTS "public"."userdb" ALTER COLUMN "user_id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."question_catalog" ALTER COLUMN "question_id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."ivent_catalog" ALTER COLUMN "ivent_id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."island_task_catalog" ALTER COLUMN "task_id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."island_catalog" ALTER COLUMN "island_id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."company_catalog" ALTER COLUMN "company_id" DROP DEFAULT;
DROP SEQUENCE IF EXISTS "public"."userdb_user_id_seq";
DROP TABLE IF EXISTS "public"."userdb";
DROP SEQUENCE IF EXISTS "public"."question_catalog_question_id_seq";
DROP TABLE IF EXISTS "public"."question_catalog";
DROP SEQUENCE IF EXISTS "public"."ivent_catalog_ivent_id_seq";
DROP TABLE IF EXISTS "public"."ivent_catalog";
DROP SEQUENCE IF EXISTS "public"."island_task_catalog_task_id_seq";
DROP TABLE IF EXISTS "public"."island_task_catalog";
DROP SEQUENCE IF EXISTS "public"."island_catalog_island_id_seq";
DROP TABLE IF EXISTS "public"."island_catalog";
DROP SEQUENCE IF EXISTS "public"."company_catalog_company_id_seq";
DROP TABLE IF EXISTS "public"."company_catalog";
DROP EXTENSION IF EXISTS "plpgsql";
DROP SCHEMA IF EXISTS "public";
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "public";


ALTER SCHEMA "public" OWNER TO "postgres";

--
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "plpgsql" WITH SCHEMA "pg_catalog";


--
-- Name: EXTENSION "plpgsql"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "plpgsql" IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: company_catalog; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."company_catalog" (
    "company_id" integer NOT NULL,
    "company_name" character varying NOT NULL,
    "company_description" character varying DEFAULT 'Desc'::character varying,
    "company_location" character varying,
    "company_activity" character varying,
    "company_tag" character varying[],
    "company_ivents" character varying[]
);


ALTER TABLE "public"."company_catalog" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: company_catalog_company_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."company_catalog_company_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."company_catalog_company_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: company_catalog_company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."company_catalog_company_id_seq" OWNED BY "public"."company_catalog"."company_id";


--
-- Name: island_catalog; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."island_catalog" (
    "island_id" integer NOT NULL,
    "island_name" character varying NOT NULL,
    "task_count" integer DEFAULT 0,
    "done_task_count" integer DEFAULT 0,
    "island_description" character varying
);


ALTER TABLE "public"."island_catalog" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: island_catalog_island_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."island_catalog_island_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."island_catalog_island_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: island_catalog_island_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."island_catalog_island_id_seq" OWNED BY "public"."island_catalog"."island_id";


--
-- Name: island_task_catalog; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."island_task_catalog" (
    "task_id" integer NOT NULL,
    "island_id" integer,
    "task_name" character varying NOT NULL,
    "task_description" character varying DEFAULT 'Desc'::character varying,
    "task_status" character varying DEFAULT 'done'::character varying,
    "test_link" character varying,
    "video_link" character varying,
    "forum_link" character varying,
    "chat_link" character varying
);


ALTER TABLE "public"."island_task_catalog" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: island_task_catalog_task_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."island_task_catalog_task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."island_task_catalog_task_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: island_task_catalog_task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."island_task_catalog_task_id_seq" OWNED BY "public"."island_task_catalog"."task_id";


--
-- Name: ivent_catalog; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."ivent_catalog" (
    "ivent_id" integer NOT NULL,
    "ivent_name" character varying NOT NULL,
    "ivent_description" character varying DEFAULT 'Desc'::character varying,
    "ivent_status" character varying DEFAULT 'notice'::character varying,
    "ivent_location" character varying,
    "ivent_company" character varying,
    "ivent_tag" character varying[]
);


ALTER TABLE "public"."ivent_catalog" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: ivent_catalog_ivent_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."ivent_catalog_ivent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."ivent_catalog_ivent_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: ivent_catalog_ivent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."ivent_catalog_ivent_id_seq" OWNED BY "public"."ivent_catalog"."ivent_id";


--
-- Name: question_catalog; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."question_catalog" (
    "question_id" integer NOT NULL,
    "question" character varying NOT NULL,
    "question_description" character varying DEFAULT 'Desc'::character varying,
    "answer" character varying NOT NULL,
    "question_answers" character varying[]
);


ALTER TABLE "public"."question_catalog" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: question_catalog_question_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."question_catalog_question_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."question_catalog_question_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: question_catalog_question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."question_catalog_question_id_seq" OWNED BY "public"."question_catalog"."question_id";


--
-- Name: userdb; Type: TABLE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE TABLE "public"."userdb" (
    "user_id" integer NOT NULL,
    "nick_name" character varying NOT NULL,
    "rating" integer DEFAULT 0,
    "skill_count" integer DEFAULT 0,
    "friends_count" integer DEFAULT 0,
    "friends_online" integer DEFAULT 0,
    "avatar_url" character varying,
    "class_type" character varying DEFAULT 'It'::character varying,
    "achievement_count" integer,
    "internship_count" integer
);


ALTER TABLE "public"."userdb" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: userdb_user_id_seq; Type: SEQUENCE; Schema: public; Owner: c36906_game_api_na4u_ru
--

CREATE SEQUENCE "public"."userdb_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "public"."userdb_user_id_seq" OWNER TO "c36906_game_api_na4u_ru";

--
-- Name: userdb_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER SEQUENCE "public"."userdb_user_id_seq" OWNED BY "public"."userdb"."user_id";


--
-- Name: company_catalog company_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."company_catalog" ALTER COLUMN "company_id" SET DEFAULT "nextval"('"public"."company_catalog_company_id_seq"'::"regclass");


--
-- Name: island_catalog island_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."island_catalog" ALTER COLUMN "island_id" SET DEFAULT "nextval"('"public"."island_catalog_island_id_seq"'::"regclass");


--
-- Name: island_task_catalog task_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."island_task_catalog" ALTER COLUMN "task_id" SET DEFAULT "nextval"('"public"."island_task_catalog_task_id_seq"'::"regclass");


--
-- Name: ivent_catalog ivent_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."ivent_catalog" ALTER COLUMN "ivent_id" SET DEFAULT "nextval"('"public"."ivent_catalog_ivent_id_seq"'::"regclass");


--
-- Name: question_catalog question_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."question_catalog" ALTER COLUMN "question_id" SET DEFAULT "nextval"('"public"."question_catalog_question_id_seq"'::"regclass");


--
-- Name: userdb user_id; Type: DEFAULT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."userdb" ALTER COLUMN "user_id" SET DEFAULT "nextval"('"public"."userdb_user_id_seq"'::"regclass");


--
-- Data for Name: company_catalog; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."company_catalog" ("company_id", "company_name", "company_description", "company_location", "company_activity", "company_tag", "company_ivents") FROM stdin;
\.


--
-- Data for Name: island_catalog; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."island_catalog" ("island_id", "island_name", "task_count", "done_task_count", "island_description") FROM stdin;
1	HTML	100	23	\N
2	CSS	100	32	\N
3	Golang	56	44	\N
4	Java	100	95	\N
5	Мат. Анализ	100	53	\N
6	Linux	130	95	\N
\.


--
-- Data for Name: island_task_catalog; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."island_task_catalog" ("task_id", "island_id", "task_name", "task_description", "task_status", "test_link", "video_link", "forum_link", "chat_link") FROM stdin;
1	1	test 1	Desc	done	\N	\N	\N	\N
2	1	test 2	Desc	done	\N	\N	\N	\N
3	1	test 3	Desc	done	\N	\N	\N	\N
4	1	test 4	Desc	done	\N	\N	\N	\N
5	1	test 5	Desc	done	\N	\N	\N	\N
7	1	test 7	Desc	locked	\N	\N	\N	\N
8	1	test 8	Desc	locked	\N	\N	\N	\N
9	1	test 9	Desc	locked	\N	\N	\N	\N
10	1	test 10	Desc	locked	\N	\N	\N	\N
11	1	test 11	Desc	locked	\N	\N	\N	\N
6	1	test 6	Desc	toGo	\N	\N	\N	\N
\.


--
-- Data for Name: ivent_catalog; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."ivent_catalog" ("ivent_id", "ivent_name", "ivent_description", "ivent_status", "ivent_location", "ivent_company", "ivent_tag") FROM stdin;
2	java For beginners	Курс про основы языка java	done	Нижний Нвогород	Intel Inc.	{#java,#Beginners}
4	Unit Тестирование java	Покажем и научим как писать тесты.	notice	Нижний Нвогород	Мера	{#java,#test}
5	Golang 	Основы языка 	notice	Москва	Росатом	{#Golang,#Росатом}
3	Мирный Атом	Лекция - введение в Атомную отрасль	done	Нижний Нвогород	Росатом	{#Росатом,#Лекция}
1	SQL	Основы синтаксиса языка запросов.	notice	Москва	Postgres.pro	{#SQL,#Postgres}
7	Школа Росатома	Курс лекций и занятий		Москва	Росатом	{#Росатом,#Лекции}
6	TDD разработка	Разработка через тестирование		Москва	Росатом	{#TDD,#Росатом}
\.


--
-- Data for Name: question_catalog; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."question_catalog" ("question_id", "question", "question_description", "answer", "question_answers") FROM stdin;
3	3 foo	Desc	foo	{bar,test,332,foo}
4	4 test	Desc	test	{bar,test,332,foo}
2	2 bar	Desc	bar	{bar,test,332,"Все ответы"}
1	1 123	Desc	123	{Че,Где,123,321}
\.


--
-- Data for Name: userdb; Type: TABLE DATA; Schema: public; Owner: c36906_game_api_na4u_ru
--

COPY "public"."userdb" ("user_id", "nick_name", "rating", "skill_count", "friends_count", "friends_online", "avatar_url", "class_type", "achievement_count", "internship_count") FROM stdin;
1	Владимир Семенов	356	5	12	5	asas	It	4	6
\.


--
-- Name: company_catalog_company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."company_catalog_company_id_seq"', 1, false);


--
-- Name: island_catalog_island_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."island_catalog_island_id_seq"', 1, false);


--
-- Name: island_task_catalog_task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."island_task_catalog_task_id_seq"', 1, false);


--
-- Name: ivent_catalog_ivent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."ivent_catalog_ivent_id_seq"', 1, false);


--
-- Name: question_catalog_question_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."question_catalog_question_id_seq"', 1, false);


--
-- Name: userdb_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: c36906_game_api_na4u_ru
--

SELECT pg_catalog.setval('"public"."userdb_user_id_seq"', 1, false);


--
-- Name: company_catalog company_catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."company_catalog"
    ADD CONSTRAINT "company_catalog_pkey" PRIMARY KEY ("company_id");


--
-- Name: island_catalog island_catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."island_catalog"
    ADD CONSTRAINT "island_catalog_pkey" PRIMARY KEY ("island_id");


--
-- Name: island_task_catalog island_task_catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."island_task_catalog"
    ADD CONSTRAINT "island_task_catalog_pkey" PRIMARY KEY ("task_id");


--
-- Name: ivent_catalog ivent_catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."ivent_catalog"
    ADD CONSTRAINT "ivent_catalog_pkey" PRIMARY KEY ("ivent_id");


--
-- Name: question_catalog question_catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."question_catalog"
    ADD CONSTRAINT "question_catalog_pkey" PRIMARY KEY ("question_id");


--
-- Name: userdb userdb_pkey; Type: CONSTRAINT; Schema: public; Owner: c36906_game_api_na4u_ru
--

ALTER TABLE ONLY "public"."userdb"
    ADD CONSTRAINT "userdb_pkey" PRIMARY KEY ("user_id");


--
-- Name: SCHEMA "public"; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA "public" TO PUBLIC;


--
-- PostgreSQL database dump complete
--

