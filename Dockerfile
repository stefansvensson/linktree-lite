FROM nginx:alpine

# Copy all static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY config.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY styles/ /usr/share/nginx/html/styles/

# Expose port 80
EXPOSE 80

# nginx:alpine already has CMD to start nginx, so no need to override

