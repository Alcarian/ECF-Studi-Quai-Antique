CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `nom` varchar(255) default NULL,
  `e-mail1` varchar(255) default NULL,
  `texte` varchar(255),
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `users` (`nom`,`e-mail1`,`texte`)
VALUES
  ("Jemima Kinney","sagittis.placerat@outlook.couk","NCZ09AUP1UR"),
  ("Chandler Mckee","dui.fusce@outlook.couk","ARS75QJO6FY"),
  ("Keelie Brady","bibendum.fermentum@google.couk","QFW71MDQ8PT"),
  ("Quyn Burgess","hendrerit.donec.porttitor@google.net","VJL51OHV6UK"),
  ("Ivy Griffin","enim@google.ca","XIG74RKM8GM"),
  ("Jada Adkins","pulvinar.arcu@outlook.ca","VZK81EVR4TN"),
  ("Cassidy Castaneda","malesuada.vel.convallis@yahoo.org","YNR51SYD8TJ"),
  ("Priscilla Rivers","nullam.scelerisque.neque@outlook.edu","YOW13KMN4IA"),
  ("Kadeem Walker","consectetuer.euismod.est@protonmail.com","PFP97VIS6RW"),
  ("Keefe Fletcher","sit.amet@hotmail.com","QWO49TVY5XH");
INSERT INTO `users` (`nom`,`e-mail1`,`texte`)
VALUES
  ("Lucian Lara","eu.euismod@yahoo.com","UYI62NFE0GL"),
  ("Lacota Gomez","magna@icloud.com","MQS31SGR6HR"),
  ("Ainsley Wallace","varius.nam.porttitor@icloud.ca","EHY55CXE5WY"),
  ("Fallon Pena","massa.vestibulum@google.edu","FKE17VPH9RO"),
  ("Victoria Chen","et@google.couk","ZRU28TDI7TX"),
  ("Ursula Ballard","magna.praesent.interdum@hotmail.org","FEE43HBA1BQ"),
  ("Jenna Maxwell","urna.ut@aol.org","XQU55HXX5MK"),
  ("McKenzie Guerrero","neque@yahoo.com","FWM02ELS7ER"),
  ("Germaine Hunter","sed.facilisis@aol.edu","NQR05HCF0FM"),
  ("Marsden Graham","proin.eget@icloud.net","LFC98FRN8OE");
