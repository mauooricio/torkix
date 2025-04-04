/*
  Warnings:

  - You are about to drop the column `ano` on the `Veiculo` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Veiculo` table. All the data in the column will be lost.
  - Added the required column `placa` to the `Veiculo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Veiculo" DROP COLUMN "ano",
DROP COLUMN "marca",
ADD COLUMN     "placa" TEXT NOT NULL;
