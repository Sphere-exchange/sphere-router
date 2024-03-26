-- CreateTable
CREATE TABLE "liquidityPool" (
    "pool_address" TEXT NOT NULL,
    "token0_address" TEXT NOT NULL,
    "token1_address" TEXT NOT NULL,
    "token0_reserve" TEXT NOT NULL,
    "token1_reserve" TEXT NOT NULL,

    CONSTRAINT "liquidityPool_pkey" PRIMARY KEY ("pool_address")
);

-- CreateIndex
CREATE UNIQUE INDEX "liquidityPool_pool_address_key" ON "liquidityPool"("pool_address");
