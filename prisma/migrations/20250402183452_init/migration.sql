-- CreateTable
CREATE TABLE "Veiculo" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);
