# 1. Node resmi imajı kullan
FROM node:20-alpine

# 2. Çalışma dizini oluştur
WORKDIR /app

# 3. package.json ve package-lock.json'ı kopyala (client klasörü için)
COPY client/package*.json ./client/

# 4. client klasöründe bağımlılıkları yükle
RUN cd client && npm install

# 5. client klasöründeki tüm dosyaları kopyala
COPY client ./client

# 6. Build komutunu çalıştır (client içinde)
RUN cd client && npm run build

# 7. Build sonucu oluşan dosyaların sunulacağı dizin
WORKDIR /app/client/dist

# 8. Basit bir HTTP sunucusu ile serve et (örneğin serve paketi)
RUN npm install -g serve

# 9. 3000 portunu expose et
EXPOSE 3000

# 10. Uygulamayı başlat
CMD ["serve", "-s", ".", "-l", "3000"]
