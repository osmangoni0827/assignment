// kilometerToMeter
// budgetCalculator
// hotelCost
// megaFriend


                     // **********Problem Number One***********
// *-----------start------------kilometerToMeter----------start------------*
function kilometerToMeter(kilometer)
{
    if(kilometer>=0)
    {
        var calculateMeter=kilometer*1000;
        return calculateMeter;

    }
    else{
        return "Your Input is invalid.. Plz Give any valid value";
    }   
}
                // *-----------close Function-----------*
console.log(kilometerToMeter(8));

//*-----------close----------kilometerToMeter----------close----------*



                     // **********Problem Number Two***********


//*-----------start----------budgetCalculator---------------start-------*
function budgetCalculator(NumberofWatch,NumberofMobile,NumberofLaptop)
{
    if(NumberofWatch>=0&&NumberofMobile>=0&&NumberofLaptop>=0)
    {

    
    var TotalWatchPrice=NumberofWatch*50;
    var TotalMobilePrice=NumberofMobile*100;
    var TotalLaptopPrice=NumberofLaptop*500;

    var TotalCost=TotalWatchPrice+TotalMobilePrice+TotalLaptopPrice;
    return TotalCost;
    }
    else
    {
        return "Your Input is invalid.. Plz Give any valid value";
        
    }
}
                // *-----------close Function-----------*

    console.log(budgetCalculator(2,2,5));

// *------------close---------budgetCalculator------------close--------*



                         // **********Problem Number Three***********

// *-------------start-------------HOTEL COST----------------start---------*

function hotelCost(NumberOfDaysToStay)
{
    if(NumberOfDaysToStay>=0)
    {
        // *------------------CalculationPart-----------------*
        if(NumberOfDaysToStay<=10)
        {
            var Totalcost=NumberOfDaysToStay*100;
            return Totalcost;
        }
        else if(NumberOfDaysToStay<=20)
        {
            var costOfBeforeOffer=10*100;
            var FirstOfferDay =NumberOfDaysToStay-10;
            var FirstOfferCost=FirstOfferDay*80;
            var TotalCost=costOfBeforeOffer+FirstOfferCost;
            return TotalCost;
        }
        else{
            var costOfBeforeOffer=10*100;
            var FirstOfferCost=10*80;
            var SecondOfferDay=NumberOfDaysToStay-20;
            var SecondOfferCost=SecondOfferDay*50;
            var TotalCost=costOfBeforeOffer+FirstOfferCost+SecondOfferCost;
            return TotalCost;

        }
         // *-----------x-------CalculationPart-----------x------*
    }
    else
    {
        return "Your Input is invalid.. Plz Give any valid value";  
    }
}
                    // *-----------close Function-----------*
    console.log(hotelCost(21));
// *------------close---------HOTEL COST------------close--------*


                        // **********Problem Number Four***********


// *-------------start-------------Mega Firend----------------start---------*

function megaFriend(name)
{
    

    
    if((name[name.length-1]>='A'&&name[name.length-1]<='Z')||(name[name.length-1]>='a'&& name[name.length-1]<='z'))
        {
            var BiggestNamelength=name[0].length;
            var index=0;
                // CalculationPart
            for(var i=0;i<(name.length-1);i++)
                {
                    if((name[i]>='A'&&name[i]<='Z')|| (name[i]>='a'&&name[i]<='z'))
                        {
                            if(BiggestNamelength<name[i+1].length)
                                {
                                    BiggestNamelength=name[i+1].length;
                                    index=[i+1];
                                }  
                        }
                    else
                        {
                            return "Your Input is invalid.. Plz Give any valid value";  
                        }
                    
                } 
        }
    else
        {
            return "Your Input is invalid.. Plz Give any valid value";
        }
        
        //------------ functionReturn--------
    return name[index];
}
var Name=["osman","ibrahim","Mustakumbillah","Musfiqur","Taskin","Liton","Niyamot","OsmanGoniMollah"]
console.log(megaFriend(Name));
// *------------close---------Mega Name------------close--------*

