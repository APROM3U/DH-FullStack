
procedure XorSwap( var X, Y: Integer );
begin
    X := X xor Y;
    Y := X xor Y;
    X := X xor Y;
end;