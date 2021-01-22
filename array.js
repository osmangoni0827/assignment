function megaFriend(name)
{
    var BiggestNamelength=name[0].length;
    var index=0;
    for(var i=0;i<(name.length-1);i++)
    {
        if(BiggestNamelength<name[i+1].length)
        {
            BiggestNamelength=name[i+1].length;
            index=[i+1];
        }  
    }
    return name[index];
}
var Name=["osman","kader","ibrahim","Mustakumbillah","Musfiqur","Taskin","Liton","Niyamot"]
console.log(megaFriend(Name));