# Static site served via Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static site files
COPY index.html /usr/share/nginx/html/
COPY about.html /usr/share/nginx/html/
COPY blog.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY services.html /usr/share/nginx/html/
COPY booking.html /usr/share/nginx/html/
COPY my-appointment.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/
COPY blog/ /usr/share/nginx/html/blog/
COPY portal/ /usr/share/nginx/html/portal/
COPY docs/ /usr/share/nginx/html/docs/

# Cloud Run expects port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
