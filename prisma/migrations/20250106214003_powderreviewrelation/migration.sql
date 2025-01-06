-- AddForeignKey
ALTER TABLE "Powder" ADD CONSTRAINT "Powder_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_powderId_fkey" FOREIGN KEY ("powderId") REFERENCES "Powder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
