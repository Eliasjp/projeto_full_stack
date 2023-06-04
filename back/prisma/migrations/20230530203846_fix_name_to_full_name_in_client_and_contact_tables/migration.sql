/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `full_name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "name",
ADD COLUMN     "full_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "name",
ADD COLUMN     "full_name" TEXT NOT NULL;
