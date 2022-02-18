CREATE USER 'SnapAdmin'@'localhost' IDENTIFIED BY 'SnapMotDePasse';
GRANT ALL ON snapfaces TO 'SnapAdmin'@'localhost';
FLUSH PRIVILEGES;