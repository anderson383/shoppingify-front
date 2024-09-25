#!/bin/bash

echo "Construyendo la aplicación..."
npm run build

if [ ! -d "build" ]; then
  echo "Error: el directorio build no existe."
  exit 1
fi

echo "Empaquetando la aplicación..."
zip -r build.zip build

echo "Subiendo artefactos a S3..."
aws --endpoint-url=http://localhost:4566 s3 cp build.zip s3://shop-bucket/source.zip

echo "Descargando artefactos de S3..."
aws --endpoint-url=http://localhost:4566 s3 cp s3://shop-bucket/source.zip .

echo "Proceso de CI/CD simulado completado."
