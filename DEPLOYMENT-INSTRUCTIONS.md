# 🚀 INSTRUCTIONS DE DÉPLOIEMENT - PALAISFLORENTIN.COM

## 📋 PRÉREQUIS
- Accès FTP/SFTP à votre hébergeur
- Domaine configuré : https://palaisflorentin.com
- Certificat SSL activé

## 📁 FICHIERS À DÉPLOYER
Le dossier `dist/` contient tous les fichiers optimisés pour la production.

## 🔧 ÉTAPES DE DÉPLOIEMENT

### 1. CONNEXION À VOTRE HÉBERGEUR
```bash
# Via FTP/SFTP
ftp palaisflorentin.com
# ou
sftp user@palaisflorentin.com
```

### 2. UPLOAD DES FICHIERS
```bash
# Naviguer vers le dossier public_html ou www
cd public_html

# Upload de tous les fichiers du dossier dist/
put -r dist/* ./
```

### 3. VÉRIFICATION DES PERMISSIONS
```bash
# Fichiers : 644
chmod 644 *.html *.css *.js *.xml *.txt

# Dossiers : 755
chmod 755 assets/ lovable-uploads/
```

### 4. CONFIGURATION DU SERVEUR WEB

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /

# Redirection des routes React
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Compression Gzip
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache des assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name palaisflorentin.com www.palaisflorentin.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name palaisflorentin.com www.palaisflorentin.com;
    
    root /var/www/palaisflorentin.com/public_html;
    index index.html;
    
    # SSL Configuration
    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Routes React
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache des assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## ✅ VÉRIFICATIONS POST-DÉPLOIEMENT

### 1. PAGES PRINCIPALES
- [ ] https://palaisflorentin.com/ ✅
- [ ] https://palaisflorentin.com/appartement ✅
- [ ] https://palaisflorentin.com/reserver ✅
- [ ] https://palaisflorentin.com/calendrier ✅
- [ ] https://palaisflorentin.com/services ✅
- [ ] https://palaisflorentin.com/contact ✅

### 2. FONCTIONNALITÉS
- [ ] Widget Lodgify fonctionnel
- [ ] Calendrier personnalisé
- [ ] Navigation responsive
- [ ] Images optimisées
- [ ] SEO et Schema.org

### 3. PERFORMANCE
- [ ] PageSpeed Insights > 90
- [ ] Core Web Vitals optimisés
- [ ] Compression Gzip active
- [ ] Cache des assets configuré

## 🚨 EN CAS DE PROBLÈME

### Rollback
```bash
# Restaurer la version précédente
# Utiliser le backup créé
```

### Support
- Vérifier les logs d'erreur
- Tester en local d'abord
- Contacter l'hébergeur si nécessaire

## 📞 CONTACT
- **Développeur** : Assistant IA
- **Date de déploiement** : $(date)
- **Version** : v1.0.0-production
- **Domaine** : https://palaisflorentin.com

---
**🎯 Votre site Palais Florentin est prêt pour la production !**
