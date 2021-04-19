DROP TABLE IF EXISTS "Topics" CASCADE;
CREATE TABLE IF NOT EXISTS "Topics" (
  "id"  SERIAL ,
  "name" VARCHAR(255) NOT NULL,
  "messages_count" INTEGER NOT NULL DEFAULT 0,
  "user_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY ("id")
);


DROP TABLE IF EXISTS "Themes" CASCADE;
CREATE TABLE IF NOT EXISTS "Themes" (
  "id"  SERIAL ,
  "name" VARCHAR(255) NOT NULL,
  "hidden" BOOLEAN NOT NULL DEFAULT false,
  "style" JSONB NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "Messages" CASCADE;
CREATE TABLE IF NOT EXISTS "Messages" (
  "id"  SERIAL ,
  "text" VARCHAR(255) NOT NULL,
  "user_id" INTEGER NOT NULL,
  "topic_id" INTEGER NOT NULL,
  "reactions" JSONB NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "parent_id" INTEGER REFERENCES "Messages" ("id")
    ON DELETE SET NULL ON UPDATE CASCADE,
  PRIMARY KEY ("id")
);


INSERT INTO "Topics" ("id","name","messages_count","user_id","created_at","updatedAt")
VALUES
(DEFAULT,'Book',12,0,'2021-04-14 12:23:57.550 +00:00','2021-04-14 12:23:57.550 +00:00'),
(DEFAULT,'Game',0,1,'2021-04-14 12:23:57.550 +00:00','2021-04-14 12:23:57.550 +00:00'),
(DEFAULT,'Jedi',1000,1,'2021-04-14 12:23:57.550 +00:00','2021-04-14 12:23:57.550 +00:00');

INSERT INTO "Messages" ("id","text","user_id","topic_id","reactions","created_at","updatedAt")
VALUES
(DEFAULT,'hi',1,1,'{"like":[0],"dislike":[0],"laugh":[0],"hooray":[0],"confused":[0],"heart":[0],"rocket":[0],"eyes":[0]}','2021-04-14 12:23:57.551 +00:00','2021-04-14 12:23:57.551 +00:00')
