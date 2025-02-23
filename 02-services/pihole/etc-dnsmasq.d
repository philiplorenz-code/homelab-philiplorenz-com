# /etc/dnsmasq.d/custom.conf

# DNS-Server konfigurieren
server=8.8.8.8
server=8.8.4.4
server=1.1.1.1

# Lokale DNS-Anfragen erlauben
domain-needed
bogus-priv

# Cache aktivieren und groß setzen
cache-size=10000

# Anfragen von allen Interfaces akzeptieren
interface=eth0,wlan0
listen-address=0.0.0.0
bind-interfaces

# DHCP-Server deaktivieren (falls nicht benötigt)
no-dhcp-interface=

# Logs minimieren (optional)
log-queries
log-facility=/var/log/dnsmasq.log
