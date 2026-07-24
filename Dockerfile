FROM node:20-alpine AS build
WORKDIR /app
ENV npm_config_cache=/tmp/npm-cache
COPY package*.json ./
RUN npm install --legacy-peer-deps --no-audit --no-fund
COPY . .
ARG VITE_APP_API_URL=http://localhost:3000
ARG VITE_ADMIN_USERNAME=admin
ARG VITE_ADMIN_PASSWORD=admin
ENV VITE_APP_API_URL=$VITE_APP_API_URL
ENV VITE_ADMIN_USERNAME=$VITE_ADMIN_USERNAME
ENV VITE_ADMIN_PASSWORD=$VITE_ADMIN_PASSWORD
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
