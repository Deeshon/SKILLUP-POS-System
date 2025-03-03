/*
  Warnings:

  - Added the required column `expiryDate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturedDate` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" 
ADD COLUMN "manufacturedDate" TIMESTAMP(3),
ADD COLUMN "expiryDate" TIMESTAMP(3);

UPDATE "Product" 
SET "manufacturedDate" = '2020-01-01 00:00:00', 
    "expiryDate" = NOW() 
WHERE "manufacturedDate" IS NULL;

ALTER TABLE "Product" 
ALTER COLUMN "manufacturedDate" SET NOT NULL,
ALTER COLUMN "expiryDate" SET NOT NULL;
