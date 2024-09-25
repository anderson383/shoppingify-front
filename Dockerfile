# Etapa de construcción de dependencias
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --frozen-lockfile

# Etapa de construcción
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:1.23-alpine as prod
EXPOSE 80

# Limpiar la carpeta de Nginx y copiar los archivos de construcción
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar activos adicionales si los tienes
COPY src/assets/ /usr/share/nginx/html/assets

# Remover la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf
# Copiar la configuración personalizada de Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
