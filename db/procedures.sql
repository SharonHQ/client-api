CREATE DEFINER=`root`@`localhost` PROCEDURE `clientAddOrEdit`(
	in _id integer,
    in _name varchar(45),
    in _last_name varchar(45),
    in _birthdate date
)
begin
	if _id = 0 then
		insert into clients (name, last_name, invoice_date, birthdate)
        values (_name, _last_name, CURRENT_TIMESTAMP, _birthdate);
		set _id = LAST_INSERT_ID();
		
	else
		update clients
        set
			name = _name,
            last_name = _last_name,
            birthdate =_birthdate
            where id = _id;
	end if;
    select _id as id;
end