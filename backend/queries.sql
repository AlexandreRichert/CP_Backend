insert into country (code,name,emoji) values ('US','United States','🇺🇸');
insert into country (code,name,emoji) values ('FR','France','🇫🇷');

insert into region(name) values ('North America');

Update country set regionId = 2 where code = 'US';