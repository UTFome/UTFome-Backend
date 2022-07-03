CREATE TABLE public."Produto" (
    id integer NOT NULL,
    nome text NOT NULL,
    descricao text NOT NULL,
    preco double precision NOT NULL,
    quantidade integer NOT NULL,
    "usuarioId" integer NOT NULL
);

ALTER TABLE public."Produto" OWNER TO postgres;

CREATE SEQUENCE public."Produto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public."Produto_id_seq" OWNER TO postgres;

ALTER SEQUENCE public."Produto_id_seq" O

export DATABASE_URL="postgres://swnpxesdyhhyml:4a530ad6f893e102755ee1b2f7625b75faedf783525b5ee99dacf8f292c035a8@ec2-52-200-215-149.compute-1.amazonaws.com:5432/d5dk8qkjt86jbg"