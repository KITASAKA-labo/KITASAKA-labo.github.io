-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "news" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "study" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "study_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "event" TEXT NOT NULL,

    CONSTRAINT "work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member" (
    "id" SERIAL NOT NULL,
    "graduation" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);
