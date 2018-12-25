FROM nginx:alpine AS build-env

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /observerpattern

COPY . /observerpattern
WORKDIR /observerpattern

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]