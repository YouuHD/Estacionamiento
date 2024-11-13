-- CreateTable
CREATE TABLE "FirstData" (
    "id" STRING NOT NULL,
    "placa" STRING(255) NOT NULL,
    "tipo" STRING(255) NOT NULL,
    "hora_entrada" STRING(255) NOT NULL,
    "estado" STRING(255) NOT NULL,

    CONSTRAINT "FirstData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondData" (
    "id" STRING NOT NULL,
    "placa" STRING(255) NOT NULL,
    "tipo" STRING(255) NOT NULL,
    "estado" STRING(255) NOT NULL,

    CONSTRAINT "SecondData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LastData" (
    "id" STRING NOT NULL,
    "placa" STRING(255) NOT NULL,
    "tipo" STRING(255) NOT NULL,
    "hora_entrada" STRING(255) NOT NULL,
    "hora_salida" STRING(255) NOT NULL,
    "cantidad" STRING(255) NOT NULL,
    "estado" STRING(255) NOT NULL,

    CONSTRAINT "LastData_pkey" PRIMARY KEY ("id")
);
